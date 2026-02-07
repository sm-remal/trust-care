"use client";

import { useState } from "react";
import { Eye, Trash2, MapPin, Clock, ShieldCheck, AlertCircle, X, Calendar, User, CreditCard, Hash, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cancelBooking } from "@/actions/bookings";
import { toast } from "react-hot-toast";

export default function MyBookingClient({ initialBookings }) {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      const res = await cancelBooking(id);
      if (res.success) toast.success("Successfully Cancel");
      else toast.error(res.message);
    }
  };

  return (
    <div className="space-y-4">
      {/* Table View (Desktop) */}
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
                  <p className="font-black text-slate-800">{booking.serviceName}</p>
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
                <td className="p-6 text-xs font-bold italic"><StatusBadge status={booking.status} /></td>
                <td className="p-6 text-right space-x-2">
                  <Button onClick={() => setSelectedBooking(booking)} variant="outline" size="sm" className="rounded-sm border-primary/20 text-primary font-bold hover:bg-primary hover:text-white cursor-pointer">
                    <Eye size={14} className="mr-1" /> Details
                  </Button>
                  <Button onClick={() => handleDelete(booking._id)} variant="ghost" size="sm" className="text-red-500 hover:bg-red-50 font-bold rounded-sm cursor-pointer">
                    <Trash2 size={14} className="mr-1" /> Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View (Mobile) */}
      <div className="lg:hidden space-y-4">
        {initialBookings.map((booking) => (
          <div key={booking._id} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 relative">
             <div className="absolute top-0 right-0 p-4"><StatusBadge status={booking.status} /></div>
             <h3 className="text-xl font-black text-slate-800 pr-20">{booking.serviceName}</h3>
             <div className="mt-4 space-y-2 text-slate-500 font-bold text-sm">
                <div className="flex items-center gap-2 font-bold"><Clock size={16} className="text-primary" /> {booking.duration}</div>
                <div className="flex items-center gap-2 font-bold"><MapPin size={16} className="text-primary" /> {booking.address}</div>
                <p className="text-2xl font-black text-primary mt-2 italic">৳{booking.totalCost}</p>
             </div>
             <div className="grid grid-cols-2 gap-3 mt-6">
                <Button onClick={() => setSelectedBooking(booking)} variant="outline" className="rounded-xl font-bold border-primary text-primary cursor-pointer">Details</Button>
                <Button onClick={() => handleDelete(booking._id)} variant="destructive" className="rounded-xl font-bold cursor-pointer">Cancel</Button>
             </div>
          </div>
        ))}
      </div>

      {/* --- PREMIUM MODAL WITH ALL DATA --- */}
      {selectedBooking && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-all">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="bg-slate-900 p-8 text-white relative">
              <button onClick={() => setSelectedBooking(null)} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                <X size={20} />
              </button>
              <div className="flex flex-col gap-1">
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Official Receipt</p>
                <h2 className="text-2xl font-black">{selectedBooking.serviceName}</h2>
                <p className="text-slate-400 text-xs font-bold italic">Reference ID: {selectedBooking._id}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
              
              {/* Top Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DetailItem icon={<Clock size={16}/>} label="Service Duration" value={selectedBooking.duration} />
                <DetailItem icon={<CreditCard size={16}/>} label="Total Payable" value={`৳${selectedBooking.totalCost}`} isPrimary />
                <DetailItem icon={<ShieldCheck size={16}/>} label="Current Status" value={selectedBooking.status} isStatus status={selectedBooking.status} />
              </div>

              <hr className="border-slate-100" />

              {/* User & Meta Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <DetailItem icon={<Mail size={16}/>} label="User Email" value={selectedBooking.userEmail} />
                  <DetailItem icon={<Calendar size={16}/>} label="Booked On" value={new Date(selectedBooking.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} />
                </div>
                <div className="space-y-4">
                  <DetailItem icon={<Hash size={16}/>} label="Service ID" value={selectedBooking.serviceId} />
                </div>
              </div>

              {/* Full Location Section */}
              <div className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} className="text-primary"/> Delivery Address Details
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-600">
                   <div><span className="text-slate-400 block text-[9px] uppercase">Division</span> {selectedBooking.location?.division}</div>
                   <div><span className="text-slate-400 block text-[9px] uppercase">District</span> {selectedBooking.location?.district}</div>
                   <div><span className="text-slate-400 block text-[9px] uppercase">City</span> {selectedBooking.location?.city}</div>
                   <div><span className="text-slate-400 block text-[9px] uppercase">Area</span> {selectedBooking.location?.area}</div>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-slate-400 block text-[9px] uppercase font-black mb-1">Full Address</span>
                  <p className="text-slate-800 font-black italic">"{selectedBooking.address}"</p>
                </div>
              </div>

              <Button onClick={() => setSelectedBooking(null)} className="w-full py-7 rounded-lg font-black uppercase tracking-widest bg-primary text-white hover:bg-slate-900 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                Done & Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {initialBookings.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
           <AlertCircle size={48} className="mx-auto text-slate-300 mb-4" />
           <p className="text-slate-400 font-bold text-xl tracking-tighter uppercase">No Bookings Found</p>
        </div>
      )}
    </div>
  );
}

// --- Internal Components for UI Cleanliness ---
function DetailItem({ icon, label, value, isStatus, status, isPrimary }) {
  const statusColors = {
    Pending: "text-amber-600",
    Confirmed: "text-blue-600",
    Completed: "text-green-600",
  };

  return (
    <div className="space-y-1">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
        {icon} {label}
      </p>
      <p className={`font-black break-all ${isPrimary ? 'text-primary text-xl italic' : 'text-slate-800'} ${isStatus ? statusColors[status] || 'text-slate-500' : ''}`}>
        {value}
      </p>
    </div>
  );
}

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