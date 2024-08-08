"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  router.replace(`/confirmation?bookingId=${bookingId}`);
  return <div>redirecting...</div>;
}
