import { Suspense } from "react";
import Booking from "./Booking";
import { getBookings } from "../supabase";
import Loading from "../(components)/Loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Filters from "./Filters";
import { logOut } from "@/lib/actions";

export const revalidate = 0;

const Page = async ({ searchParams }) => {
  const status = searchParams.status ?? "all";

  const { data: bookings } = await getBookings(status);

  return (
    <div className=" container py-2">
      <div className="pb-2 border-b-4 border-gray-700 flex justify-between items-center">
        <h2 className="text-xl ">Bookings</h2>
        <Button>
          <Link href="/">home</Link>
        </Button>
        <form action={logOut}>
          <Button>Sign out</Button>
        </form>
      </div>
      <Filters />
      <Suspense fallback={<Loading />} key={bookings?.[0].id}>
        <div className="py-2 grid grid-cols-2 w-full gap-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
          {bookings.length &&
            bookings.map((booking) => (
              <Booking key={booking.id} booking={booking} />
            ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
