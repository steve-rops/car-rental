import { Button } from "@/components/ui/button";
import { Cog, UserRound, Zap } from "lucide-react";
import Image from "next/image";
import CardButtons from "./CardButtons";

const iconSize = 20;

const perks = [
  { automatic: true, icon: <Cog size={iconSize} color="#64748b" /> },
  { electric: true, icon: <Zap size={iconSize} color="#64748b" /> },
];

const CarForRent = ({ car }) => {
  return (
    <div className="py-2 container border rounded-md">
      <div className="relative aspect-square">
        <Image
          className="rounded-md"
          alt="a car image"
          src={car.imageUrl}
          fill
        />
      </div>
      <div className="flex items-baseline gap-2">
        <p className="lg:text-lg md:text-md text-sm font-semibold">
          {car.make}
        </p>
        <p className="md:text-md text-sm ">{car.model}</p>
      </div>
      <hr />
      {perks.map((perk, i) => (
        <div className="py-1" key={i}>
          {(perk.automatic && (
            <div className="flex items-center text-muted-foreground text-sm gap-2">
              <span>{perk.icon}</span>Automatic
            </div>
          )) || (
            <div className="flex items-center text-muted-foreground text-sm gap-2">
              <span>{perk.icon}</span>Electric
            </div>
          )}
        </div>
      ))}
      <hr />
      <div className="md:flex md:items-center justify-between py-1 ">
        <div className="flex gap-1 items-center">
          <UserRound size={iconSize} color="#64748b" />
          <span className="text-sm">{car.capacity}</span>
          <p className="text-xs">pers</p>
        </div>

        <CardButtons carId={car.id} />
      </div>
    </div>
  );
};

export default CarForRent;
