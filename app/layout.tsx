'use client';
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';
import { CartProvider } from "@/app/context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CartProvider>
            { children }
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}