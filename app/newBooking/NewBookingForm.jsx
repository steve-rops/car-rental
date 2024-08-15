import { Button } from "@/components/ui/button";
import { bookCar } from "@/lib/actions";
import { differenceInDays } from "date-fns";
import SubmitBookingButton from "./SubmitBookingButton";

export default function NewBookingForm({
  costPerDay,
  carId,
  start,
  end,
  location,
}) {
  const days = differenceInDays(new Date(end), new Date(start));

  const bookCarWithAllData = bookCar.bind(null, {
    days,
    costPerDay,
    carId,
    start,
    end,
    location,
  });

  return (
    <div className="md:w-full flex md:justify-center py-2">
      <form
        action={bookCarWithAllData}
        className="md:w-[30%] w-[100%] flex flex-col  gap-4 md:px-4"
      >
        <div className="flex w-full justify-between gap-2 items-center">
          <label htmlFor="dates">dates:</label>
          <input
            className="border border-gray-500 rounded-md p-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            type="text"
            name="dates"
            value={`${start} - ${end}`}
            disabled
          />
        </div>
        <div className="flex w-full justify-between gap-2 items-center">
          <label htmlFor="days">days:</label>
          <input
            className="border border-gray-500 rounded-md p-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            type="text"
            name="days"
            value={days}
            disabled
          />
        </div>

        <div className="flex w-full justify-between gap-2 items-center">
          <label htmlFor="location">location:</label>
          <input
            className="border border-gray-500 rounded-md p-2 disabled:cursor-not-allowed disabled:bg-gray-300"
            type="text"
            name="location"
            value={location}
            disabled
          />
        </div>
        <div className="flex w-full justify-between gap-2 items-center">
          <label htmlFor="email">email:</label>
          <input
            className="border border-gray-500 rounded-md p-2"
            type="email"
            name="email"
            required
          />
        </div>

        <div className="flex w-full justify-between gap-2 items-center">
          <label htmlFor="name">name: </label>
          <input
            className="border border-gray-500 rounded-md p-2"
            type="text"
            name="name"
            required
          />
        </div>

        <SubmitBookingButton />
      </form>
    </div>
  );
}
