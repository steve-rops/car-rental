"use client";
import { approveOrCancel } from "@/lib/actions";
import { Check, X } from "lucide-react";

export default function AcceptOrCancel() {
  const handleClick = (type) => {
    approveOrCancel(type);
  };
  return (
    <div className="flex gap-1 hover:cursor-pointer">
      <Check
        onClick={() => handleClick("approve")}
        className="text-green-500 border rounded-md"
      />
      <X
        onClick={() => handleClick("cancel")}
        className="text-red-500 border rounded-md"
      />
    </div>
  );
}
