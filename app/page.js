import Image from "next/image";
import heroImg from "../public/cartoon-car.jpeg";
import AvailabilitySearch from "./(components)/AvailabilitySearch";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="lg:container p-10 space-y-5">
      <div className="container py-10 h-96 bg-no-repeat bg-center bg-contain  bg-[url('../public/cartoon-car.jpeg')] lg:items-start">
        <div className=" bg-gray-50/65 w-[50%] mx-auto ">
          <h2 className="lg:text-4xl">Renting a car was never easier.</h2>
          <h3 className="text-xs lg:text-lg text-gray-800">
            Select one of our many cars
          </h3>
        </div>
      </div>
      <AvailabilitySearch />
    </div>
  );
}
