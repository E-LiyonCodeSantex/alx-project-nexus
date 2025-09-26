'use client';

import { Provider } from "react-redux";
import { store } from "@/store";
import NavBar from "../components/navrBar";
import Header from "../components/header";
import Footer from "../components/footer";
import type { ReactNode } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="h-full  w-full">
        <Header />
        <main className="pt-24">
          {children}
        </main>

        <Footer />
        <NavBar />
      </div>
    </Provider>
  );
}
