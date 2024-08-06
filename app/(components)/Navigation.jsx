import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-end p-2 gap-4 lg:text-2xl z-10 bg-herobg">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/cars">Cars</Link>
    </div>
  );
};

export default Navigation;
