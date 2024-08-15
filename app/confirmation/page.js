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
    <div className="md:container px-4 py-10">
      <div className="flex justify-between pb-4">
        <h3 className=" text-lg md:text-3xl">Booking Information: </h3>
        <Link href="/">
          <Button>Make a New Booking</Button>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <DriverInfo bookingId={bookingId} />

        {/* <h4 className="md:text-2xl text-lg ">Car Information</h4> */}
      </Suspense>
    </div>
  );
}
