// app/page.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
   router.push("/admin/register")
  }, [router]);

  return null; // Optional: add a loading spinner here
}
