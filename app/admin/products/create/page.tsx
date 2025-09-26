"use client";

import { useState } from "react";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function AdminPostPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        initial_price: "",
        stock: "",
        brand: "",
        category: "",
        images: [] as File[],
        previewUrls: [] as string[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            const previewArray = fileArray.map(file => URL.createObjectURL(file));

            setFormData(prev => ({
                ...prev,
                images: fileArray,
                previewUrls: previewArray,
            }));
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const availability = Number(formData.stock) > 0;

        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("description", formData.description);
        payload.append("price", formData.price);
        payload.append("initial_price", formData.initial_price);
        payload.append("stock", formData.stock);
        payload.append("available", availability.toString());
        payload.append("brand", formData.brand);
        payload.append("category", formData.category);

        formData.images.forEach((file, index) => {
            payload.append(`images`, file); // backend should accept multiple files under 'images'
        });

        try {
            await axiosInstance.post("/products/", payload);
            alert("Product posted successfully!");
            router.push("/admin/dashboard"); // or wherever you want to redirect
        } catch (error: any) {
            console.error("Failed to post product:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input name="name" placeholder="Product Name" onChange={handleChange} required className="input" />
                <textarea name="description" placeholder="Description" onChange={handleChange} required className="input" />
                <input name="price" type="number" placeholder="Price" onChange={handleChange} required className="input" />
                <input name="initial_price" type="number" placeholder="Initial Price" onChange={handleChange} required className="input" />
                <input name="stock" type="number" placeholder="Stock Quantity" onChange={handleChange} required className="input" />
                <input name="brand" placeholder="Brand Name" onChange={handleChange} required className="input" />
                <input name="category" placeholder="Category Name" onChange={handleChange} required className="input" />
                <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="input" />

                <button type="submit" className="bg-[#0699CA] text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Post Product
                </button>
            </form>
        </div>
    );
}
