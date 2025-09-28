"use client";
import Image from "next/image";
import DetailRow from "@/app/components/detailRow";
import IncrementAndDecrementButton from "@/app/components/IncrementAndDecrementButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { ProductCards } from "@/interface/index";
import axiosInstance from "@/lib/axios";
import { useCart } from "@/app/context/CartContext"

export default function CardDetailPage() {
    const { id } = useParams() as { id: string };
    const [product, setProduct] = useState<ProductCards | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const { cart, addToCart } = useCart();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axiosInstance.get(`/products/${id}`);
                setProduct(res.data);
                if (res.data.images.length > 0) {
                    setSelectedImage(res.data.images[0].image);
                }

            } catch (error: any) {
                console.error("Failed to fetch product:", error);
                if (error.response?.status === 404) {
                    setErrorMessage("Product not found.");
                } else if (error.response?.status === 500) {
                    setErrorMessage("Something went wrong on our end. Please try again later.");
                } else {
                    setErrorMessage("Unable to load product. Check your connection and try again.");
                }
            }
        }

        if (id) fetchProduct();
    }, [id]);

      useEffect(() => {
    if (!product) return;
    const cartItem = cart.find(ci => ci.id === String(product.id));
    setQuantity(cartItem ? cartItem.quantity : 1);
  }, [product, cart]);

     const handleAddToCart = () => {
        if (!product) return;
            addToCart(product, quantity);
            alert(`${quantity} item(s) added to cart`);
    };

    if (errorMessage) return <p className="text-red-500">{errorMessage}</p>;
    if (!product) return <p>Loading...</p>;

    return (
        <div className="w-full flex flex-col justify-center items-start p-4 gap-4 ">
            <div className="w-full flex flex-wrap justify-start items-center gap-4">
                <div className="w-full flext relative max-w-[500px] h-[300px] sm:h-[400px] border-2 border-blackk/50 rounded-2xl ">
                    <Image
                        src={selectedImage || "/fallback.png"}
                        fill
                        alt="car"
                        className="rounded-2xl"
                    />
                </div >
                <div className="flex flex-wrap justify-around items-center gap-4">
                    {product.images.map((imgObj, index) => (
                        <div
                            key={index}
                            className="relative w-[120px] sm:w-[90px] h-[120px] sm:h-[90px] border-2 border-black/50 rounded-2xl cursor-pointer hover:border-blue-500 transition"
                            onClick={() => setSelectedImage(imgObj.image)}
                        >
                            <Image
                                src={imgObj.image}
                                fill
                                alt={`Thumbnail ${index + 1}`}
                                className="rounded-2xl object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <DetailRow label="Name" value={product.name} />
                <DetailRow label="Brand" value={product.brand.name} />
                <DetailRow label="Descripion" value={product.description} />
                <DetailRow label="Price:" value={product.price} />
                <DetailRow label="Initial Price:" value={product.initial_price} />
                <DetailRow label="Category:" value={product.category.name} />
                <DetailRow label="Stock:" value={product.stock} />
                <DetailRow
                    label="Available:"
                    value={
                        product.available ? (
                            <span className="text-green-600 font-semibold">In Stock</span>
                        ) : (
                            <span className="text-red-500 font-semibold">Out of Stock</span>
                        )
                    }
                />

            </div>
            <div className="flex w-full justify-around items-center flex-wrap gap-2">
                   <div className="flex justify-start items-center gap-4 bg-[#DCDCDC]">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                disabled={quantity === 0}
                                className=" flex justify-center items-center border-r-2 border-black/40 hover:border-blue-600 "
                            >
                                <b className="px-2 font-bold text-3xl text-[#0699CA] hover:text-blue-600 transition">-</b>
                            </button>
                            <h2 className="font-bold">{quantity}</h2>
                            <button
                                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                                disabled={quantity >= product.stock}
                                className=" flex justify-center items-center border-l-2 border-black/40 hover:border-blue-600 "
                            >
                                <b className="px-2 font-bold text-2xl text-[#0699CA] hover:text-blue-600 transition">+</b>
                            </button>
                        </div>

                <button
                    onClick={handleAddToCart}
                    className="px-6 text-white py-2 bg-[#0699CA] gap-4 rounded-2xl hover:bg-blue-600 transition"
                >
                    <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
