import Link from "next/link";

const Navigation = () => {
  return (
    <div className="pt-4 px-10 flex justify-between p-2 gap-4 lg:text-2xl">
      <Link className=" -rotate-6" href="/">
        Home
      </Link>
      <div className="flex gap-4 rotate-6">
        <Link className="hover:text-gray-600" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-600" href="/contact">
          Contact
        </Link>
        <Link className="hover:text-gray-600" href="/cars">
          Cars
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
