"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaClipboardList } from "react-icons/fa";
import Link from "next/link";

export default function AdminHeader() {
    const { data: session } = useSession();
    return (
        <div className="fixed top-0 w-full flex flex-col gap-2 px-4 py-2 bg-white border-b-2 border-black/60 z-50">
            <div className="flex flex-row justify-between gap-4 items-center ">
                <Image
                    src="/assets/images/o-buy-no-bg-sm.png"
                    alt="O-Buy logo"
                    width={100}
                    height={50}
                />
                <Link href={`/home/cart`} className="flex flex-col justify-center items-center relative">
                    <span className="text-white text-sm bg-[#0699CA] justify-center items-center p-[6px] rounded-full border-2 border-white/70">100</span>
                    <FaClipboardList size={32} 
                        className=" text-[#0699CA] text-3xl font-bold absolute top-7 right-5"
                    />
                </Link>
            </div>
            <div className="relative w-full overflow-hidden">
                <div className="animate-scroll whitespace-nowrap text-[#0699CA] text-lg no-scrollbar">
                    {session ? (
                        <p>Hello admin {session?.user?.username ?? "Guest"}!</p>
                    ) : (
                        <p>Sign in for a personalized experience</p>
                    )}
                </div>
            </div>

        </div>
    )
}
