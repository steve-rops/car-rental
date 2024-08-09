import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Filters({ status }) {
  return (
    <div className="flex gap-1 py-2">
      <Link href="/bookings?status=all">
        <Button variant={`${status === "all" ? "default" : "outline"}`}>
          All
        </Button>
      </Link>

      <Link href="/bookings?status=Confirmed">
        <Button variant={`${status === "Confirmed" ? "default" : "outline"}`}>
          Confirmed
        </Button>
      </Link>

      <Link href="/bookings?status=Awaiting%20Confirmation">
        <Button
          variant={`${
            status === "Awaiting Confirmation" ? "default" : "outline"
          }`}
        >
          Awaiting Confirmation
        </Button>
      </Link>
    </div>
  );
}
