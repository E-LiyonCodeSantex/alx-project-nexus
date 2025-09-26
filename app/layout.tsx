'use client';
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}