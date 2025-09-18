"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Join() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        username: " ",
        email: " ",
        password: " ",
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
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(formData),
            });
            // If response is not JSON, catch it early
            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server is currently unavailable. Please try again later.");
            }

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }
            router.push("/home")
        } catch (err: any) {
            setError(err.message);
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
                <div className="w-full h-[350px] flex justify-center items-center">
                    <img src="/assets/images/o-buy-no-bg-sm.png" alt="O-Buy Logo" className="mx-auto mb-4 w-30 h-20" />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-[400px] h-full justfiy-center items-center bg-[#D9D9D9]/50 gap-4 rounded-tl-[20px] rounded-tr-[20px] p-4">
                    <div className="w-full items-start mb-4">
                        <h1 className="text-2xl font-semibold">Sign Up</h1>
                        <h4>Enter your details below to continue</h4>
                    </div>
                    <div className="border-b-2 border-black/60 mb-4">
                        <h4>Username</h4>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            placeholder="Santex"
                            className="appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-outer-spin-button]:appearance-none 
                            bg-transparent text-black w-full max-w-[200px] 
                            border-none focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="border-b-2 border-black/60 mb-4">
                        <h4>Email</h4>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="santex@example.com"
                            className="appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-outer-spin-button]:appearance-none 
                            bg-transparent text-black w-full max-w-[200px] 
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
                            bg-transparent text-black w-full max-w-[200px] 
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
                    <p className="text-sm text-black flex flex-wrap items-center gap-1 mb-2">
                        <span>By continuing you agree to our </span>
                        <a
                            href="/terms-of-service"
                            rel="noopener noreferrer"
                            aria-label="Read our Terms of Service"
                            className="text-blue-600 no-underline hover:text-blue-800"
                        >
                            Terms of Service
                        </a>
                        <span>and</span>
                        <a
                            href="/privacy-policy."
                            rel="noopener noreferrer"
                            aria-label="Read our Terms of Service"
                            className="text-blue-600 no-underline hover:text-blue-800"
                        >
                            Privacy Policy.
                        </a>
                    </p>
                    {error && (
                        <p className="text-red-600 text-sm text-center">{error}</p>
                    )}

                    <div className="w-full flex justify-center items-center mt-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0699CA] w-full max-w-[200px] justify-center items-center text-white px-6 py-2 mb-3 rounded-xl disabled:opacity-50 block mx-auto hover:bg-blue-600 transition"
                        >{loading ? "Signing up..." : "Sign up"}
                        </button>
                    </div>
                    <p className="text-sm text-black flex flex-wrap justify-center items-center gap-1 mt-3">
                        <span>Already have an accout? </span>
                        <a
                            href="/join/login"
                            rel="noopener noreferrer"
                            aria-label="Read our Terms of Service"
                            className="text-blue-600 no-underline hover:text-blue-800"
                        >
                            Sign in
                        </a>
                    </p>

                </form>
            </div>
        </div>
    );
}