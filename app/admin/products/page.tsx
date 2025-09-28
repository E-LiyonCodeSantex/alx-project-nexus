"use client";
import AdminAdsCard from "@/app/components/admin/adminAddsCard";
import SearchBar from "@/app/components/searchBar";
import Card from "@/app/components/cards";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/productSlice";
import type { RootState, AppDispatch } from "@/store";

export default function AdminHomePage() {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector((state: RootState) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    console.log("Redux products:", products);


    return (
        <div className="w-full flex flex-col justify-center items-center p-4 gap-4">
            <AdminAdsCard />
            <SearchBar />

            <div className="w-full flex flex-col justify-around items-center gap-4">
                <p className="w-full flex justify-center items-center pb-2 border-b-2 border-black/50">All products</p>
                {loading && <p>Loading products...</p>}
                {error && (
                    <p className="text-red-500">
                        {error.status === 404
                            ? "Products not found."
                            : error.status === 500
                                ? "Something went wrong on our end. Please try again later."
                                : error.message}
                    </p>
                )}


                <div className="w-full flex flex-wrap justify-center items-center gap-6 p-2 ">
                    {Array.isArray(products) && products
                        .map((product, index) => (
                            <Card key={index} product={product} />
                        ))}

                </div>
            </div>
        </div>
    )
}