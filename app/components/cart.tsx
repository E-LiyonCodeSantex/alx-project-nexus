"use client";
import Image from "next/image";
import IncrementAndDecrementButton from "@/app/components/IncrementAndDecrementButton";
import RemoveButton from "@/app/components/removeButton";
import { useState } from "react";



export default function CartCards() {
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="flex flex-col justify-center items-start gap-4 p-4 w-full border-b-2 border-blackk/70">
            <div className="flex justify-between items-center gap-4 w-full flex-wrap">
                <div className="flex justify-center items-center gap-4 ">
                    <div className="w-[100px] h-[100px] relative rounded-2xl border-2 border-blackk/50">
                        <Image
                            src="/assets/images/smart-watch3.jpg"
                            alt="watch3 image"
                            fill
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start w-[100px] gap-2 ">
                        <p className="overflow-x-scroll whitespace-nowrap no-scrollbar w-[100px]">Combo bag and shoe</p>
                        <p className="overflow-x-scroll whitespace-nowrap no-scrollbar w-[100px]">Brand: <span className="font-bold">Sxchen</span></p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-black font-bold">₦65,452</p>
                    <p className="text-black/40 font-bold">₦115,452</p>
                </div>
            </div>

            <div className="flex justify-between items-center gap-4 w-full flex-wrap">
                <RemoveButton />
                <IncrementAndDecrementButton
                    stock={20}
                    initialCount={0}
                    onChange={setQuantity}
                />
            </div>
        </div>
    )
}