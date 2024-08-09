import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/utils/supabase/middleware";
import { checkForDoubleBookings } from "./app/newBooking/middleware";

export async function middleware(request) {
  if (request.nextUrl.pathname === "/newBooking")
    return await checkForDoubleBookings(request);

  return await updateSession(request);
}

export const config = {
  matcher: ["/bookings", "/newBooking"],
};
