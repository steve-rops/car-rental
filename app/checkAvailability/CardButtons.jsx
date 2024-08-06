"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDatesANDLocation } from "../(context)/dateANDLocationContext";
import { format } from "date-fns";

const CardButtons = ({ carId }) => {
  const { start, end, location } = useDatesANDLocation();

  return (
    <div className="space-x-1 pt-2">
      {/* maybe later add this functionality */}
      {/* <Link href={`cars/${car.id}`}>
            <Button className="" variant="outline" size="sm">
              more
            </Button>
      //     </Link> */}

      <Link
        href={`newBooking?carId=${carId}&start=${format(
          new Date(start),
          "dd MMM yyyy"
        )}&end=${format(new Date(end), "dd MMM yyyy")}&location=${location}`}
      >
        <Button className="bg-green-500 hover:bg-green-600 " size="sm">
          book
        </Button>
      </Link>
    </div>
  );
};

export default CardButtons;
