"use client";
import { useSession } from "next-auth/react";
import AddsCard from "../components/addCard";
import SearchBar from "../components/searchBar";
import Card from "../components/cards";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/productSlice";
import type { RootState, AppDispatch } from "@/store";

export default function HomePage() {
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Redux products:", products);

  return (
    <div className="w-full flex flex-col justify-center items-center p-4 gap-4">
      <SearchBar />
      <AddsCard />
      <div className="flex flex-col justify-center items-start gap-2 w-full">
        <div className="w-full flex justify-between gap-4 items-center border-b-2 border-black/50 text-black px-4">
          <p>Telephones</p>
          <a
            href="/home/offers"
            className="no-underline text-[#0699CA]">See All</a>
        </div>

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


        <div className="w-full flex justify-start items-center gap-6 p-2 overflow-x-scroll no-scrollbar">
          {Array.isArray(products) && products
            .filter(product => product.category?.name === "telephones")
            .map((product, index) => (
              <Card key={index} product={product} />
            ))}

        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-2 w-full">
        <div className="w-full flex justify-between gap-4 items-center border-b-2 border-black/50 text-black px-4">
          <p>Clothes</p>
          <a
            href="/home/offers"
            className="no-underline text-[#0699CA]">See All</a>
        </div>

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


        <div className="w-full flex justify-start items-center gap-6 p-2 overflow-x-scroll no-scrollbar">
        {
          Array.isArray(products) && products
          .filter(product => product.category?.name == "Cloths")
          .map((product, index) =>(
            <Card key={index} product={product} />
          ))
        }

        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-2 w-full">
        <div className="w-full flex justify-between gap-4 items-center border-b-2 border-black/50 text-black px-4">
          <p>Electronics</p>
          <a
            href="/home/offers"
            className="no-underline text-[#0699CA]">See All</a>
        </div>

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


        <div className="w-full flex justify-start items-center gap-6 p-2 overflow-x-scroll no-scrollbar">
          {Array.isArray(products) && products
          .filter(product => product.category?.name == "Electronics")
          .map((product, index) => (
            <Card key={index} product={product} />
          ))}

        </div>
      </div>

    </div>
  );
}
