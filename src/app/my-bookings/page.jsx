import { getMyBookings } from "@/actions/bookings";
import MyBookingClient from "@/components/ClientComponent/MyBookingClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function MyBookings() {
  const session = await getServerSession(authOptions);
  const bookings = await getMyBookings(session?.user?.email);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">My <span className="text-primary">Bookings</span></h1>
          <p className="text-slate-500 font-bold italic mt-2">Manage your healthcare assistance requests.</p>
        </div>
        <MyBookingClient initialBookings={bookings} />
      </div>
    </div>
  );
}