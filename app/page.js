import Image from "next/image";
import heroImg from "../public/futuristic-exploration-dubai-s-evolving-cityscape.png";
import AvailabilitySearch from "./(components)/AvailabilitySearch";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-[35%,1fr] bg-herobg p-4">
        <div className="flex flex-col gap-2 lg:py-12 py-8 justify-center">
          <h2 className="lg:text-4xl text-xl  ">
            Renting a car was never easier.
          </h2>
          <h3 className="text-xs lg:text-lg text-gray-800">
            Select one of our many cars
          </h3>
          <Button className="lg:text-xl text-sm">check availability</Button>
        </div>
        <div className="relative">
          <Image
            className="object-cover"
            alt="banner image"
            fill
            src={heroImg}
          />
        </div>
      </div>

      <AvailabilitySearch />
    </>
  );
}
