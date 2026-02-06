"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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