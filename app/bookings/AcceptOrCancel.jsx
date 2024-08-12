"use client";
import { approveOrCancel } from "@/lib/actions";
import { Check, X } from "lucide-react";

export default function AcceptOrCancel({ bookingId, status }) {
  const handleClick = (type, id) => {
    approveOrCancel(type, id);
  };

  if (status === "Confirmed") return null;

  return (
    <div className="flex gap-1 hover:cursor-pointer">
      <Check
        onClick={() => handleClick("approve", bookingId)}
        className="text-green-500 border rounded-md"
      />
      <X
        onClick={() => handleClick("cancel", bookingId)}
        className="text-red-500 border rounded-md"
      />
    </div>
  );
}
