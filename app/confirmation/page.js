import { Button } from "@/components/ui/button";
import { getBookingById } from "../supabase";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../(components)/Loading";
import DriverInfo from "./DriverInfo";

export const revalidate = 0;

export default function Page({ searchParams }) {
  const { bookingId } = searchParams;

  return (
    <div className="container py-10">
      <div className="flex justify-between pb-4">
        <h3 className="text-3xl">Booking Information: </h3>
        <Link href="/">
          <Button>Make a New Booking</Button>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <DriverInfo bookingId={bookingId} />

        <h4 className="text-2xl">Car Information</h4>
      </Suspense>
    </div>
  );
}
