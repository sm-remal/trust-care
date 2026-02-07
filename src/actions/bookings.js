"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


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
    }
  } catch (error) {
    console.error("Booking Error:", error);
    throw new Error("Failed to create booking");
  }
  redirect("/my-bookings");
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