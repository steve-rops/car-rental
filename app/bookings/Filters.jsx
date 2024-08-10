"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useOptimistic } from "react";

export default function Filters({ status }) {
  const router = useRouter();
  const [optimisticState, addOptimistic] = useOptimistic(
    status,
    (state, optimisticValue) => {
      return optimisticValue;
    }
  );

  const handleClick = (status) => {
    router.replace(`bookings?status=${status}`);
    addOptimistic(status);
  };

  return (
    <div className="flex gap-1 py-2">
      <Button
        onClick={() => handleClick("All")}
        variant={`${optimisticState === "All" ? "default" : "outline"}`}
      >
        All
      </Button>

      <Button
        onClick={() => handleClick("Confirmed")}
        variant={`${optimisticState === "Confirmed" ? "default" : "outline"}`}
      >
        Confirmed
      </Button>

      <Button
        onClick={() => handleClick("Awaiting Confirmation")}
        variant={`${
          optimisticState === "Awaiting Confirmation" ? "default" : "outline"
        }`}
      >
        Awaiting Confirmation
      </Button>
    </div>
  );
}
