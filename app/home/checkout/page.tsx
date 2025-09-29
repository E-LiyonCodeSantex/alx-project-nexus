"use client";
import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/header";
import CartCards from "@/app/components/cart"
import DetailRow from "@/app/components/detailRow";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const router = useRouter();
    const itemsTotal = cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Order placed successfully!");
        clearCart();
        router.push("/home");
    };

    if (cart.length === 0) {
        return (
            <div className="flex flex-col justify-start items-center min-h-screen text-center gap-4">
                <Header />
                <h2 className="text-red-600 text-xl font-semibold">Your cart is empty.</h2>
                <a
                    href="/home"
                    className="text-white bg-[#0699CA] hover:bg-blue-600 px-6 py-2 rounded-xl no-underline"
                >
                    Go back to home
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col gap-4 pt-2 pb-6 justify-start items-center">
            <Header />
            <div className="w-full flex flex-row justify-around items-center gap-4 flex-wrap px-4">
                <div className="w-full max-w-[450px] flex flex-col justify-start items-start gap-4">
                    <CartCards />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6"
                >
                    <h1 className="text-2xl font-bold mb-4">Checkout</h1>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Delivery Info */}
                    <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input
                            type="text"
                            name="address"
                            placeholder="Street Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal / ZIP"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Payment Info */}
                    <h2 className="text-xl font-semibold mb-2">Payment (Card)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input
                            type="text"
                            name="cardName"
                            placeholder="Name on Card"
                            value={formData.cardName}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            value={formData.expiry}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            value={formData.cvc}
                            onChange={handleChange}
                            required
                            className="p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Order Summary */}
                    <div className="border-t pt-4">
                        <DetailRow label="Total" value={`₦${itemsTotal}`} />
                        <p className="text-sm text-gray-500 mt-2">
                            Shipping, taxes and discounts calculated at checkout.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center mt-6">
                        <a
                            href="/home"
                            className="text-[#0699CA] hover:underline"
                        >
                            Continue Shopping
                        </a>
                        <button
                            type="submit"
                            className="bg-[#0699CA] text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
