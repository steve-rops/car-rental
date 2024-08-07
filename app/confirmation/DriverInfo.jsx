import { getBookingById } from "../supabase";

export default async function DriverInfo({ bookingId }) {
  const { data: booking } = await getBookingById(bookingId);
  return (
    <div className="bg-gray-300 p-2 border rounded-lg grid grid-cols-3 items-center">
      <div>
        <p>
          Name: <span className="text-lg font-bold">{booking.name}</span>
        </p>
        <p>
          Email: <span className="text-lg font-bold">{booking.email}</span>
        </p>
      </div>

      <div>
        <p>
          Booking starts at:{" "}
          <span className="text-lg font-bold bg-green-300 rounded-md">
            {booking.startDate}
          </span>
        </p>
        <p>
          Booking ends at:{" "}
          <span className="text-lg font-bold bg-red-300 rounded-md">
            {booking.endDate}
          </span>
        </p>
      </div>

      <div>
        <p>
          Status:{" "}
          {booking.status === "Awaiting Confirmation" ? (
            <span className="bg-yellow-400 text-lg font-bold rounded-md">
              Awaiting Confirmation
            </span>
          ) : (
            <span className="bg-green-600 text-lg font-bold">Confirmed</span>
          )}
        </p>
      </div>
    </div>
  );
}
