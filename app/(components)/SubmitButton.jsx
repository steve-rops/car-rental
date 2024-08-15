"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Loading from "./Loading";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="flex-1 md:flex-none" disabled={pending} type="submit">
      {pending ? <Loading /> : "search"}
    </Button>
  );
}
