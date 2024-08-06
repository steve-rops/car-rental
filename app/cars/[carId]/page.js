import { getAvailableCars } from "@/app/supabase";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Page({ params }) {
  const { carId } = params;
  const { availableCars } = await getAvailableCars();

  const availableCar = availableCars.find((car) => +car.id === +carId);

  return (
    <div className="container py-12">
      {availableCar.id && (
        <div className="flex items-center gap-10 justify-center ">
          <div>
            <h2 className="text-6xl">{availableCar.make}</h2>
            <h3>{availableCar.model}</h3>
          </div>
          <div className="relative size-80 aspect-square ">
            <Image
              className="rounded-md"
              src={availableCar.imageUrl}
              alt={availableCar.model}
              fill
            />
          </div>
        </div>
      )}

      <div>
        {availableCar.id ? (
          <div>
            <p>
              this car is <span className="bg-green-300">available</span> for
              rent
            </p>
            <Button className="bg-green-600 hover:bg-green-500">
              book now
            </Button>
          </div>
        ) : (
          <div>
            <p>
              this car is <span className="bg-green-300">not available</span>{" "}
              for rent
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
