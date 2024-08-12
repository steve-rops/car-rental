import { Suspense } from "react";
import Loading from "../(components)/Loading";
import Filters from "./Filters";
import { logOut } from "@/lib/actions";
import SignOut from "./SignOut";
import Bookings from "./Bookings";
import { redirect } from "next/navigation";

export const revalidate = 0;

const Page = ({ searchParams }) => {
  const status = searchParams.status || "All";
  if (!searchParams.status) redirect("/bookings?status=All");

  return (
    <div className=" container py-2">
      <div className="pb-2 border-b-4 border-gray-700 flex justify-between items-center">
        <h2 className="text-xl ">Bookings</h2>
        <form action={logOut}>
          <SignOut type="submit" />
        </form>
      </div>

      <Filters status={status} />

      <Suspense fallback={<Loading />} key={searchParams.status}>
        <Bookings status={status} />
      </Suspense>
    </div>
  );
};

export default Page;
