"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const router = useRouter();
  const status = useSearchParams().get("status") ?? "all";

  const handleClick = (status) => {
    router.replace(`/bookings?status=${status}`);
  };

  return (
    <div className="flex gap-1 py-2">
      <Button
        variant={`${status === "all" ? "default" : "outline"}`}
        onClick={() => handleClick("all")}
      >
        All
      </Button>
      <Button
        variant={`${status === "Confirmed" ? "default" : "outline"}`}
        onClick={() => handleClick("Confirmed")}
      >
        Confirmed
      </Button>
      <Button
        variant={`${
          status === "Awaiting Confirmation" ? "default" : "outline"
        }`}
        onClick={() => handleClick("Awaiting Confirmation")}
      >
        Awaiting Confirmation
      </Button>
    </div>
  );
}
