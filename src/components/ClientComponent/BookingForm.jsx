"use client";

import { useState, useEffect } from "react";
import { createBooking } from "@/actions/bookings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

export default function BookingForm({ service }) {
    const [duration, setDuration] = useState(1);
    const [totalCost, setTotalCost] = useState(0);

    const extractPrice = (priceStr) => {
        if (!priceStr) return 0;
        // Find out digit form string  (example: "800 BDT / Visit" -> "800")
        const match = priceStr.toString().match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    };

    const basePrice = extractPrice(service?.price);

    // Dynamic cost calculation
    useEffect(() => {
        const d = Number(duration) || 0;
        const p = Number(basePrice) || 0;

        if (p > 0) {
            setTotalCost(d * p);
        } else {
            setTotalCost(0);
        }
    }, [duration, basePrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const bookingData = {
            serviceId: service._id,
            serviceName: service.title,
            duration: `${duration} Unit`,
            totalCost,
            location: {
                division: formData.get("division"),
                district: formData.get("district"),
                city: formData.get("city"),
                area: formData.get("area"),
            },
            address: formData.get("address"),
            status: "Pending"
        };

        try {
            await createBooking(bookingData);
            toast.success("Booking Saved as Pending!");
        } catch (error) {
            toast.error("Booking failed. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 space-y-6">
            <div className="space-y-2">
                <Label className="font-bold">Select Duration (Units)</Label>
                <Input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Input name="division" placeholder="Division" required />
                <Input name="district" placeholder="District" required />
                <Input name="city" placeholder="City" required />
                <Input name="area" placeholder="Area" required />
            </div>

            <Input name="address" placeholder="Full Address" required />

            <div className="p-4 bg-slate-50 rounded-md border border-dashed border-slate-200">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-500 italic">
                        Calculation: {duration} x {basePrice}
                    </span>
                    <span className="text-2xl font-black text-primary">
                        ৳ {isNaN(totalCost) ? 0 : totalCost}
                    </span>
                </div>
            </div>

            <Button type="submit" className="w-full py-6 rounded-md text-lg font-black shadow-md shadow-primary/20 bg-primary text-white cursor-pointer">
                Confirm Booking
            </Button>
        </form>
    );
}