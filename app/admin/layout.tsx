'use client';
import { Provider } from "react-redux";
import { store } from "@/store";
import NavBar from "../components/navrBar";
import AdminHeader from "@/app/components/admin/adminHeader";
import Footer from "../components/footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="h-full  w-full">
        <AdminHeader />
        <main className="pt-24">
          {children}
        </main>

        <Footer />
        <NavBar />
      </div>
    </Provider>
  );
}
