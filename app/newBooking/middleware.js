import { areIntervalsOverlapping } from "date-fns";
import { getBookingsForASpecificCar } from "../supabase";
import { NextResponse } from "next/server";

export async function checkForDoubleBookings(request) {
  const startDate = request.nextUrl.searchParams.get("start");
  const endDate = request.nextUrl.searchParams.get("end");
  const carId = request.nextUrl.searchParams.get("carId");
  const { data } = await getBookingsForASpecificCar(carId);

  const datesAreOverlappingForASpecificCar = data.some((booking) =>
    areIntervalsOverlapping(
      { start: new Date(booking.startDate), end: new Date(booking.endDate) },
      { start: new Date(startDate), end: new Date(endDate) },
      { inclusive: true }
    )
  );

  if (datesAreOverlappingForASpecificCar) {
    const url = request.nextUrl;
    url.pathname = "/confirmation";
    url.search = `?bookingId=${data[0].id}`;
    return NextResponse.redirect(url.href);
  }
}
