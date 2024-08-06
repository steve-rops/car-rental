"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Loading from "../(components)/Loading";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="sumbit">
      {pending ? <Loading /> : "log in"}
    </Button>
  );
}
