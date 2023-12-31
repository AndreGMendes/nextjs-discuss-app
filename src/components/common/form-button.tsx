"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();
  children;
  return (
    <Button type="submit" color="secondary" isLoading={pending}>
      {children}
    </Button>
  );
}
