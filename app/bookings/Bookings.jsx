import { getBookings } from "../supabase";
import Booking from "./Booking";

export default async function Bookings({ status }) {
  const { data: bookings } = await getBookings(status);
  return (
    <div>
      {bookings.length === 0 && <p>There are no Bookings yet here</p>}
      {bookings.length !== 0 && (
        <div className="py-2 grid grid-cols-2 w-full gap-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
          {bookings.length &&
            bookings.map((booking) => (
              <Booking key={booking.id} booking={booking} />
            ))}
        </div>
      )}
    </div>
  );
}
