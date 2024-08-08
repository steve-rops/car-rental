"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    router.replace(`/confirmation?bookingId=${bookingId}`);
  }, [router, bookingId]);

  return <div>redirecting...</div>;
}
