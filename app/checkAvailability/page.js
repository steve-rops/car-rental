export const revalidate = 0;

import { CalendarCheck, CalendarX, Map } from "lucide-react";
import { format } from "date-fns";
import AvailableCars from "./AvailableCars";
import { Suspense } from "react";
import Loading from "../(components)/Loading";
import Header from "./Header";

const Page = ({ searchParams }) => {
  const { start, end, location } = searchParams;

  return (
    <div className="p-2">
      <div>
        <Header />
        <div className="">
          <div className="grid grid-cols-3 border border-gray-400 p-2 items-center rounded-lg ">
            <div className="mx-auto flex items-center">
              <Map />
              <div className="text-sm lg:text-lg">
                Place: <span className="font-semibold">{location}</span>
              </div>
            </div>
            <div className="flex items-center mx-auto">
              <CalendarCheck />
              <div className="text-sm lg:text-lg">
                RSV STARTS:{" "}
                <span className="bg-green-200 rounded-md font-semibold">
                  {format(new Date(start), "dd/MM/yy")}
                </span>
              </div>
            </div>
            <div className="flex items-center mx-auto">
              <CalendarX />
              <div className="text-sm lg:text-lg">
                RSV ENDS:{" "}
                <span className="bg-red-200 rounded-md font-semibold">
                  {format(new Date(end), "dd/MM/yy")}
                </span>
              </div>
            </div>
          </div>
          <Suspense fallback={<Loading />}>
            <AvailableCars start={start} end={end} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
