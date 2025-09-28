"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (
            !formData.email.trim() ||
            !formData.password.trim()
        ) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: formData.email.trim(),
                password: formData.password.trim(),
            });

            if (res?.error) {
                setError("Invalid email or password.");
                console.log("Full Axios response:", res);

            } else {
                alert("Login successful!");
                router.push("/home");
            }


        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                const backendMessage =
                    err.response?.data?.message ||
                    err.response?.data?.email?.[0] ||
                    err.response?.data?.detail;

                if (
                    !backendMessage?.toLowerCase().includes("email") &&
                    !backendMessage?.toLowerCase().includes("exist")
                ) {
                    setError("User not found. Check details before sending");
                } else {
                    setError(backendMessage || "Login failed. Try again.");
                }
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="flex justify-around items-center "
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #AEE8FB, #9E9797)",
            }}
        >
            <div className="w-full  h-screen flex flex-col justify-center items-center gap-4 p-2">
                <div className="w-full h-[450px] flex justify-center items-center">
                    <Image
                        src="/assets/images/o-buy-no-bg-sm.png"
                        alt="O-Buy Logo"
                        width={120}
                        height={80}
                        className="mx-auto mb-4"
                    />

                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-[400px] h-full justfiy-center items-center bg-[#D9D9D9]/50 gap-4 rounded-3xl p-4">
                    <div className="w-full items-start mb-4">
                        <h1 className="text-2xl font-semibold">Admin Login</h1>
                        <h4>Enter email and password to login</h4>
                    </div>
                    <div className="border-b-2 border-black/60 mb-4">
                        <h4>Email</h4>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="example@email.com"
                            className="appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-outer-spin-button]:appearance-none 
                            bg-transparent text-black w-full
                            border-none focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="border-b-2 border-black/60 mb-4 relative">
                        <h4>Password</h4>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="••••"
                            className="appearance-none
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-outer-spin-button]:appearance-none 
                            bg-transparent text-black w-full 
                            border-none focus:outline-none focus:ring-0"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-7 text-black"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    )}

                    <div className="w-full flex justify-center items-center mt-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0699CA] w-full max-w-[200px] justify-center items-center text-white px-6 py-2 mb-3 rounded-xl disabled:opacity-50 block mx-auto hover:bg-blue-600 transition"
                        >{loading ? "Loging in..." : "Login In"}
                        </button>
                    </div>
                    <p className="text-sm text-black flex flex-wrap justify-center items-center gap-1 mt-3">
                        <span>Don’t have anm account? </span>
                        <a
                            href="/register"
                            rel="noopener noreferrer"
                            aria-label="Read our Terms of Service"
                            className="text-blue-600 no-underline hover:text-blue-800"
                        >
                            Sign Up
                        </a>
                    </p>

                </form>
            </div>
        </div>
    );
}