import { Button } from "@/components/ui/button";
import { differenceInDays, format } from "date-fns";
import Link from "next/link";
import NewBookingForm from "./NewBookingForm";
import { getAvailableCars, getSpecificCar } from "../supabase";
import Image from "next/image";

export default async function Page({ searchParams }) {
  const { carId, start, end, location } = searchParams;
  const { data: car } = await getSpecificCar(carId);
  const days = differenceInDays(new Date(end), new Date(start));

  return (
    <div className="md:container py-10 px-4">
      <div className="flex justify-between pb-2 items-center">
        <h2 className="text-lg lg:text-2xl">Make a new booking</h2>
        <Link href="/">
          <Button className="lg:text-lg text-sm">pick new dates</Button>
        </Link>
      </div>
      <hr className="text-gray-600" />

      <div className="py-2 grid md:grid-cols-2 grid-cols-3 gap-10">
        {/* car Details */}
        <div className="relative h-24 md:h-36 lg:h-48 aspect-square">
          <Image
            className="rounded-md"
            fill
            src={car.imageUrl}
            alt="car image"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{car.model}</h3>
          <h4 className="text-xl">{car.make}</h4>

          <p>{car.year}</p>
          <p>
            persons: <span>{car.capacity}</span>
          </p>
          <div className="flex-1 flex place-items-center">
            <p className="">
              price: <span className="text-xl">{car.costPerDay}.00 $/day</span>
            </p>
          </div>
        </div>

        {/* cost Details */}
        <div>
          <h3 className="text-2xl font-semibold">
            Cost: {days * car.costPerDay}$ in total
          </h3>
        </div>
      </div>

      {/* booking form */}

      <NewBookingForm
        costPerDay={car.costPerDay}
        carId={carId}
        start={start}
        end={end}
        location={location}
      />
    </div>
  );
}
