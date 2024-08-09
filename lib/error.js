import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error() {
  return (
    <div className="text-3xl w-full flex flex-col justify-center h-96">
      <p>Something went wrong...</p>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
