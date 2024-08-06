export const revalidate = 0;

import { Suspense } from "react";
import { getAvailableCars, getCars } from "../supabase";
import CarForRent from "./CarForRent";
import Loading from "../(components)/Loading";

const AvailableCars = async ({ start, end }) => {
  const { availableCars } = await getAvailableCars(start, end);
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 py-2">
        {availableCars.map((car) => (
          <CarForRent key={car.id} car={car} />
        ))}
      </div>
    </Suspense>
  );
};

export default AvailableCars;
