"use client";

import { useState, useEffect, useMemo } from "react";
import { createBooking } from "@/actions/bookings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function BookingForm({ service, coverage = [] }) {
    const [duration, setDuration] = useState(1);
    const [totalCost, setTotalCost] = useState(0);
    const { data: session, status } = useSession();

    // Cascading States
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedArea, setSelectedArea] = useState("");

    // Get unique divisions
    const divisions = useMemo(() => {
        return [...new Set(coverage.map((item) => item.division))];
    }, [coverage]);

    // Get districts based on division
    const districts = useMemo(() => {
        if (!selectedDivision) return [];
        const filtered = coverage.filter(item => item.division === selectedDivision);
        return [...new Set(filtered.map(item => item.district))];
    }, [selectedDivision, coverage]);

    // Get cities based on district
    const cities = useMemo(() => {
        if (!selectedDistrict) return [];
        const filtered = coverage.filter(item => item.district === selectedDistrict);
        return [...new Set(filtered.map(item => item.city))];
    }, [selectedDistrict, coverage]);

    // Get areas based on city
    const areas = useMemo(() => {
        if (!selectedCity) return [];
        const found = coverage.find(item => item.city === selectedCity && item.district === selectedDistrict);
        return found ? found.covered_area : [];
    }, [selectedCity, selectedDistrict, coverage]);

    // Reset children when parent changes
    useEffect(() => { setSelectedDistrict(""); setSelectedCity(""); setSelectedArea(""); }, [selectedDivision]);
    useEffect(() => { setSelectedCity(""); setSelectedArea(""); }, [selectedDistrict]);
    useEffect(() => { setSelectedArea(""); }, [selectedCity]);

    const extractPrice = (priceStr) => {
        if (!priceStr) return 0;
        const match = priceStr.toString().match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    };

    const basePrice = extractPrice(service?.price);

    useEffect(() => {
        const d = Number(duration) || 0;
        const p = Number(basePrice) || 0;
        setTotalCost(p > 0 ? d * p : 0);
    }, [duration, basePrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === "loading") return;
        if (!session?.user?.email) return toast.error("User login session not found.");

        const formData = new FormData(e.target);
        const bookingData = {
            serviceId: service?._id,
            serviceName: service?.title,
            userEmail: session.user.email,
            duration: `${duration} Unit`,
            totalCost,
            location: {
                division: selectedDivision,
                district: selectedDistrict,
                city: selectedCity,
                area: selectedArea,
            },
            address: formData.get("address"),
            status: "Pending"
        };

        try {
            await createBooking(bookingData);
            toast.success("Booking successful!");
        } catch (error) {
            if (error.message === "NEXT_REDIRECT") return;
            console.error("Submit Error:", error);
            toast.error("Booking failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 space-y-6">
            <div className="space-y-2">
                <Label className="font-bold">Select Duration (Units)</Label>
                <Input type="number" min="1" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Division */}
                <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                    required
                >
                    <option value="">Select Division</option>
                    {divisions.map(div => <option key={div} value={div}>{div}</option>)}
                </select>

                {/* District */}
                <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedDivision}
                    required
                >
                    <option value="">Select District</option>
                    {districts.map(dist => <option key={dist} value={dist}>{dist}</option>)}
                </select>

                {/* City */}
                <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedDistrict}
                    required
                >
                    <option value="">Select City</option>
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>

                {/* Area */}
                <select 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    disabled={!selectedCity}
                    required
                >
                    <option value="">Select Area</option>
                    {areas.map(area => <option key={area} value={area}>{area}</option>)}
                </select>
            </div>

            <Input name="address" placeholder="Full Address (House/Road/Flat)" required />

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

            <Button type="submit" disabled={status === "loading"} className="w-full py-6 rounded-md text-lg font-black shadow-md shadow-primary/20 bg-primary text-white cursor-pointer">
                {status === "loading" ? "Checking Session..." : "Confirm Booking"}
            </Button>
        </form>
    );
}