import Image from "next/image";
import { getSpecificCar } from "../supabase";
import { cn } from "@/lib/utils";
import { differenceInDays, format } from "date-fns";

const Booking = async ({ booking }) => {
  const { data: car } = await getSpecificCar(booking.carId);
  const days = differenceInDays(
    new Date(booking.endDate),
    new Date(booking.startDate)
  );

  return (
    <div className=" rounded-lg border-gray-400 border p-2 w-full flex flex-col ">
      <div className=" relative aspect-square size-32  ">
        <Image
          className="rounded-md"
          src={car?.imageUrl}
          fill
          alt="an image of a car?"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-semibold">{car?.make}</h3>
            <h4 className="text-sm">{car?.model}</h4>
          </div>
          <p className="text-sm">car id:{car?.id}</p>
        </div>

        <hr />

        <div>
          Status:
          <span
            className={cn(
              "px-1 text-xs rounded-md ",
              booking.status === "Confirmed"
                ? "bg-green-300 text-green-900"
                : "bg-yellow-300 text-yellow-900"
            )}
          >
            {booking.status}
          </span>
        </div>

        <hr />

        <div className="text-sm flex gap-2 items-center">
          <div>
            <div>
              starts at:{" "}
              <span>{format(new Date(booking.startDate), "dd/MM/yy")}</span>
            </div>
            <div>
              ends at:{" "}
              <span>{format(new Date(booking.endDate), "dd/MM/yy")}</span>
            </div>
          </div>
          <div className="flex-1 text-center border border-gray-400 rounded-md">
            {days} days
          </div>
        </div>

        <hr />

        <div>
          <p className="text-sm">Cost per day: {car?.costPerDay} </p>
        </div>

        <hr />

        <div>
          <div className="font-semibold">
            Total cost: <span>{days * car?.costPerDay} $</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
