"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { FaTrash } from "react-icons/fa";



export default function CartCards() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <>
            {cart.map(item => (
                <div key={item.id}
                    className="flex flex-row justify-between items-center gap-2 w-full p-2 max-w-[400px] border-2 border-black/40">
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <div className="w-[60px] h-[60px] relative rounded-2xl border-2 border-blackk/50 ">
                            <Image
                                src={
                                    item.product.images?.[0]?.image.startsWith("http")
                                    ? item.product.images[0].image
                                    : "/fallback.png"
                                }
                                alt="watch3 image"
                                fill
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start w-[150px]">
                            <p className="overflow-x-scroll whitespace-nowrap no-scrollbar w-[150px]">{item.product.name}</p>
                            <p className="text-black font-normal">₦{item.product.price}</p>
                            <p className="text-black font-normal">₦{item.product.price * item.quantity}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex justify-center items-center gap-2 text-[#0699CA]">
                            <FaTrash />
                            <p>Remove</p>
                        </button>

                        <div className="flex justify-start items-center gap-4 bg-[#DCDCDC]">
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className=" flex justify-center items-center border-r-2 border-black/40 hover:border-blue-600 "
                            >
                                <b className="px-2 font-bold text-3xl text-[#0699CA] hover:text-blue-600 transition">-</b>
                            </button>
                            <h2 className="font-bold">{item.quantity}</h2>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.product.stock}
                                className=" flex justify-center items-center border-l-2 border-black/40 hover:border-blue-600 "
                            >
                                <b className="px-2 font-bold text-2xl text-[#0699CA] hover:text-blue-600 transition">+</b>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}