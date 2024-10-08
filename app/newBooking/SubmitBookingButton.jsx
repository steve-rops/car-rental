"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitBookingButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? "booking..." : "book"}
    </Button>
  );
}
