import { createClient } from "@supabase/supabase-js";
import { areIntervalsOverlapping, format } from "date-fns";
const supabaseUrl = "https://gsiwqitheowbokrpqaci.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getCars() {
  const { data: cars, error } = await supabase.from("cars").select("*");

  if (error) throw new Error(error.message);
  return { cars };
}

export async function getBookings(status) {
  if (status === "all") {
    const { data, error: fetchError } = await supabase
      .from("bookings")
      .select("*");
    if (fetchError) throw new Error(fetchError.message);

    return { data };
  } else {
    const { data, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("status", status);
    if (fetchError) throw new Error(fetchError.message);

    return { data };
  }
}

export async function getSpecificCar(id) {
  const { data, error } = await supabase.from("cars").select("*").eq("id", id);

  const [car] = data;

  if (error) throw new Error(error.message);

  return { car };
}

export async function getAvailableCars(startDate, endDate) {
  const pickedStartDate = new Date(startDate).getTime();
  const pickedEndDate = new Date(endDate).getTime();

  const { data, error } = await supabase.from("bookings").select("*");
  const { data: cars, error: error2 } = await supabase.from("cars").select("*");

  if (error || error2) throw new Error(error.message || error2.message);

  const notAvailableCarIdsFromBookings_asString = data
    .filter((booking) => {
      return areIntervalsOverlapping(
        { start: new Date(booking.startDate), end: new Date(booking.endDate) },
        { start: new Date(pickedStartDate), end: new Date(pickedEndDate) },
        { inclusive: true }
      );
    })
    .map((book) => book.carId)
    .join(" ");

  const availableCars = cars.filter(
    (car) => !notAvailableCarIdsFromBookings_asString.includes(String(car.id))
  );

  return { availableCars };
}

export async function makeNewBooking(details) {
  const { days, carId, start, end, costPerDay, status } = details;

  const { error } = await supabase
    .from("bookings")
    .insert([
      {
        carId: +carId,
        startDate: start,
        endDate: end,
        status,
        totalCost: days * costPerDay,
      },
    ])
    .select();

  if (error) throw new Error(error.message);
}

// carId
// totalCost
// status
// startDate
// endDate
