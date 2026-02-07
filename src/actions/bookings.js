"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";


// ===========================================

// Save booking in database
export const createBooking = async (bookingData) => {
  
  const bookingCollection = dbConnect(collections.BOOKINGS);

  const finalBooking = {
    ...bookingData, 
    status: "Pending", 
    createdAt: new Date(),
  };
  try {
    const result = await bookingCollection.insertOne(finalBooking);
    if (result.insertedId) {
      revalidatePath("/my-bookings");
      await sendBookingEmail(bookingData);  // add=================
    }
  } catch (error) {
    console.error("Booking Error:", error);
    throw new Error("Failed to create booking");
  }
  redirect("/my-bookings");
};







// Nodemailer Email Function
const sendBookingEmail = async (booking) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // যেমন: smtp.gmail.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true হলে TLS
      auth: {
        user: process.env.SMTP_USER, // তোমার ইমেল
        pass: process.env.SMTP_PASS, // App Password
      },
    });

    const mailOptions = {
      from: `"Your Service" <${process.env.SMTP_USER}>`,
      to: booking.userEmail,
      subject: `Booking Confirmation: ${booking.serviceName}`,
      html: `
        <h2>Booking Confirmation</h2>
        <p>Dear Customer,</p>
        <p>Your booking for <strong>${booking.serviceName}</strong> is confirmed.</p>
        <ul>
          <li>Duration: ${booking.duration}</li>
          <li>Total Cost: ৳${booking.totalCost}</li>
          <li>Address: ${booking.address}, ${booking.location.area}, ${booking.location.city}, ${booking.location.district}, ${booking.location.division}</li>
        </ul>
        <p>Status: ${booking.status}</p>
        <p>Thank you for choosing our service!</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Booking email sent to", booking.userEmail);
  } catch (error) {
    console.error("Email Error:", error);
  }
};









// ==========================================

// Get user booking after login 
export const getMyBookings = async (email) => {
  try {
    const bookingCollection = dbConnect(collections.BOOKINGS);
    const bookings = await bookingCollection.find({ userEmail: email }).toArray();
    return JSON.parse(JSON.stringify(bookings));
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};

// ==========================================

// Cancel booking 
export const cancelBooking = async (id) => {
  try {
    const bookingCollection = dbConnect(collections.BOOKINGS);
    await bookingCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "Cancelled" } }
    );
    revalidatePath("/my-bookings");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};