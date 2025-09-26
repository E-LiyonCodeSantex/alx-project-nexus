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

export default function CardDetailPage() {
    const { id } = useParams() as { id: string };
    const [product, setProduct] = useState<ProductCards | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);


    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axiosInstance.get(`/products/${id}`);
                setProduct(res.data);
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

    if (errorMessage) return <p className="text-red-500">{errorMessage}</p>;
    if (!product) return <p>Loading...</p>;

    return (
        <div className="w-full flex flex-col justify-center items-start p-4 gap-4 ">
            <div className="w-full flext relative max-w-[500px] h-[200px] sm:h-[300px] border-2 border-blackk/50 rounded-2xl ">
                <Image
                    src="/assets/images/car-banner.png"
                    fill
                    alt="car"
                    className="rounded-2xl"
                />
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
            <div className="flex gap-2 justify-start items-center flex-wrap">
                <IncrementAndDecrementButton
                    stock={product.stock}
                    initialCount={quantity}
                    onChange={setQuantity}
                />

                <p>[{quantity} item(s) added]</p>


            </div>
            <div className="flex w-full justify-center items-center">
                <button className="px-6 text-white py-2 bg-[#0699CA] gap-4 rounded-2xl hover:bg-blue-600 transition">
                    <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
