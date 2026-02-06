"use server"

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    const {fullName, email, phone, nId, password} = payload;

    // Check Payload, all is okay?
    if(!fullName || !email || !phone || !nId || !password){
        return {success: false, message: "Messing required fields"};
    }

    try{
        const userCollection = await dbConnect(collections.USER);
        // Check Existing User
        const isExistUser = await userCollection.findOne({email});
        if(isExistUser){
            return {success: false, message: "User already exist with this email"};
        }

        // Create User 
        const newUser = {
            provider: "credential",
            name: fullName,
            email,
            password: await bcrypt.hash(password, 10),
            role: "user",
            phone,
            nId,
            createdAt: new Date(),
        }

        // Insert User
        const result = await userCollection.insertOne(newUser);
        if(result.acknowledged){
           return {
                success: true,
                acknowledged: true,
                insertedId: result.insertedId.toString(),
            }
        }
        return { success: false, message: "Failed to insert user" };

    }
    catch(error){
        console.log("Database error: ", error);
        return { success: false, message: "Internal Server Error" };
    }
}