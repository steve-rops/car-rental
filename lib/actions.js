"use server";

import { makeNewBooking, updateBooking } from "@/app/supabase";
import { revalidatePath } from "next/cache";
import { createClient } from "./utils/supabase/server";
import { permanentRedirect, redirect } from "next/navigation";

export const bookCar = async (detail, formData) => {
  const { days, carId, start, end, location, costPerDay } = detail;
  const email = formData.get("email");
  const name = formData.get("name");
  const status = "Awaiting Confirmation";

  const details = {
    days,
    carId: +carId,
    name,
    email,
    start,
    end,
    location,
    status,
    costPerDay,
  };
  const {
    data: { id: bookingId },
    error,
  } = await makeNewBooking(details);

  revalidatePath("/checkAvailability");
  revalidatePath("/newBooking");

  // permanentRedirect(`/redirect?bookingId=${bookingId}`);
  permanentRedirect(`/confirmation?bookingId=${bookingId}`);
};

export const login = async (formData) => {
  const supabase = createClient();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/");
  } else {
    revalidatePath("/");
    redirect("/bookings");
  }
};

export const logOut = async () => {
  const supabase = createClient();
  supabase.auth.signOut();
  redirect("/");
};

export const approveOrCancel = async (type) => {
  await updateBooking(type);
};
