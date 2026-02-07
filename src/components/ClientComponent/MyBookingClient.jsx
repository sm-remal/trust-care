"use client";

import { Eye, Trash2, MapPin, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cancelBooking } from "@/actions/bookings";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function MyBookingClient({ initialBookings }) {
  
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      const res = await cancelBooking(id);
      if (res.success) toast.success(res.message);
      else toast.error(res.message);
    }
  };

  return (
    <div className="space-y-4">
      {/* Desktop View (Table) - Hidden on Mobile */}
      <div className="hidden lg:block bg-white rounded-lg border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-6 text-xs font-bold uppercase tracking-widest">Service</th>
              <th className="p-6 text-xs font-bold uppercase tracking-widest">Duration</th>
              <th className="p-6 text-xs font-bold uppercase tracking-widest">Cost</th>
              <th className="p-6 text-xs font-bold uppercase tracking-widest">Status</th>
              <th className="p-6 text-xs font-bold uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {initialBookings.map((booking) => (
              <tr key={booking._id} className="hover:bg-slate-50/50 transition-all">
                <td className="p-6">
                  <p className="font-black text-slate-800 leading-tight">{booking.serviceName}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 font-bold">
                    <MapPin size={10} /> {booking.address}
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                    <Clock size={14} className="text-primary" /> {booking.duration}
                  </div>
                </td>
                <td className="p-6 font-black text-primary italic text-lg">৳{booking.totalCost}</td>
                <td className="p-6">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="p-6 text-right space-x-2">
                  <Link href={`/my-bookings/${booking._id}`}>
                    <Button variant="outline" size="sm" className="rounded-sm border-primary/20 text-primary font-bold hover:bg-primary hover:text-white">
                      <Eye size={14} className="mr-1" /> Details
                    </Button>
                  </Link>
                  <Button onClick={() => handleDelete(booking._id)} variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 font-bold rounded-xl">
                    <Trash2 size={14} className="mr-1" /> Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) - Shown only on Mobile */}
      <div className="lg:hidden space-y-4">
        {initialBookings.map((booking) => (
          <div key={booking._id} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <StatusBadge status={booking.status} />
             </div>
             <h3 className="text-xl font-black text-slate-800 pr-20">{booking.serviceName}</h3>
             <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                   <Clock size={16} className="text-primary" /> {booking.duration}
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                   <MapPin size={16} className="text-primary" /> {booking.address}
                </div>
                <p className="text-2xl font-black text-primary mt-2">৳{booking.totalCost}</p>
             </div>
             <div className="grid grid-cols-2 gap-3 mt-6">
                <Button variant="outline" className="rounded-xl font-bold border-primary text-primary">Details</Button>
                <Button onClick={() => handleDelete(booking._id)} variant="destructive" className="rounded-xl font-bold">Cancel</Button>
             </div>
          </div>
        ))}
      </div>

      {initialBookings.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
           <AlertCircle size={48} className="mx-auto text-slate-300 mb-4" />
           <p className="text-slate-400 font-bold text-xl uppercase tracking-tighter">No Bookings Found</p>
        </div>
      )}
    </div>
  );
}

// Status Badge Component for cleaner code
function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-amber-100 text-amber-600 border-amber-200",
    Confirmed: "bg-blue-100 text-blue-600 border-blue-200",
    Completed: "bg-green-100 text-green-600 border-green-200",
  };
  return (
    <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles[status] || "bg-slate-100 text-slate-500"}`}>
      {status}
    </span>
  );
}