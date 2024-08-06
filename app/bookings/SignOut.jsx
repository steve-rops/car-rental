"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SignOut() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "signing out..." : "sign out"}
    </Button>
  );
}
