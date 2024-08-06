import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" pb-1 mb-2 border-b-4 border-gray-700 flex items-center justify-between">
      <h2 className="md:text-xl  ">
        Check the current Availability of our cars
      </h2>

      <Link href="/">
        <Button className="text-sm md:text-lg">pick new dates</Button>
      </Link>
    </div>
  );
};

export default Header;
