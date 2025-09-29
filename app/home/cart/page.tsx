"use client";
import CartCards from "@/app/components/cart";
import Header from "@/app/components/header";
import SearchBar from "@/app/components/searchBar";
import { useCart } from "@/app/context/CartContext";
import DetailRow from "@/app/components/detailRow";

export default function Cart() {
    const { cart, clearCart } = useCart();
    const itemsTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div>
            <Header />
            <SearchBar />

            <div className="flex flex-col justify-center items-center w-full gap-4 py-4">
                <div className="w-full flex justify-between gap-4 items-center border-b-2 border-black/50 text-black px-4 bg-[#DCDCDC]">
                    <p>Cart <span>({cart.length})</span></p>
                    <button
                        onClick={clearCart}
                        className="no-underline text-[#0699CA]"
                    >Clear All</button>
                </div>
                <CartCards />
            </div>
            <div className="flex justify-center items-center w-full p-4 gap-4 flex-wrap">
                <div className="flex justify-center items-center gap-4 p-4 border-2 border-black/40 max-w-[400px] w-full">
                    {cart.length === 0 ? (
                        <div className="text-center text-red-600 flex flex-col justify-center items-center gap-4">
                            Cart is empty. <a href="/home" className="text-white bg-[#0699CA] hover:bg-blue-600 flex justify-center px-4 py-2 no-underline rounded-2xl">Go back to home</a>.
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <DetailRow label="Total" value={itemsTotal} />
                            <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
                                <a href="/home" className="text-white bg-[#B47C13] hover:bg-[#E9A019] flex justify-center px-4 py-2 no-underline rounded-2xl">Buy more</a>
                                <a href="/home/checkout" className="text-white bg-[#0699CA] hover:bg-blue-600 flex justify-center px-4 py-2 no-underline rounded-2xl">Checkout</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}