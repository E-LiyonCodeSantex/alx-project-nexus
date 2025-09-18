"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PhoneCall } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function AuthOptions() {
  const router = useRouter();
  const [number, setNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    setError("");
  };

  const isValidPhone = (phone: string): boolean => {
    return /^\+\d{7,15}$/.test(phone); // starts with + and 7–15 digits
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    if (!isValidPhone(number)) {
      setError("Enter a valid phone number with country code");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: number }),
      });

      if (!res.ok) throw new Error("Signup failed");

      const data = await res.json();
      console.log("Signup success:", data);
      router.push("/home");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-cover bg-center w-full h-screen flex flex-col items-center justify-center space-y-4"
      style={{ backgroundImage: "url('/assets/images/onboarding-woman2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-[400px] flex flex-col justify-center items-center p-4">
          <form onSubmit={handleSubmit} className="flex flex-col items-start mb-3">
            <h1 className="text-white text-3xl font-bold mb-4">Quick start</h1>
            <h3 className="text-white font-semibold">
              Enter phone number to make instant purchase
            </h3>

            <div className="w-full max-w-[300px] flex flex-row justify-start items-center gap-2 p-2 border-b-2 border-l-2 border-gray-300 mb-2">
              <PhoneCall size={24} color="#ffffff" />
              <input
                type="text"
                className="appearance-none 
                  [&::-webkit-inner-spin-button]:appearance-none 
                  [&::-webkit-outer-spin-button]:appearance-none 
                  bg-transparent text-white w-full max-w-[200px] 
                  border-none focus:outline-none focus:ring-0"
                value={number}
                onChange={handleChange}
                placeholder="+2348000000000"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0699CA] w-full max-w-[100px] text-sm text-white px-4 py-2 rounded-xl disabled:opacity-50 hover:bg-blue-600 transition"
              >
                {loading ? "Signing..." : "Enter"}
              </button>
            </div>

            <div className="flex flex-col w-full justify-center items-center mt-2">
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            </div>
          </form>

          <button
            onClick={() => router.push("/join")}
            className="bg-[#0699CA] w-full max-w-[200px] text-white px-6 py-2 mb-3 rounded-xl disabled:opacity-50 hover:bg-blue-600 transition"
          >Sign up
          </button>

          <p className="text-white">Or connect with social media</p>

          <div className="w-full max-w-[250px] flex flex-col justify-center items-center gap-4 mt-4 ">
            <button onClick={() => signIn("google")}
              className="flex flex-row justify-center items-center bg-[#0F9D58] w-full max-w-[220px] text-white gap-1 px-2 py-2 rounded-xl mb-3 hover:bg-green-800 transition">
              <FaGoogle size={24} className="text-white" />
              Sign in with Google
            </button>

            <button className="flex flex-row justify-center items-center bg-[#1877F2] w-full max-w-[220px] text-white gap-1 px-2 py-2 rounded-xl mb-3 hover:bg-blue-800 transition">
              <FaFacebookF size={24} className="text-white" />
              Sign in with Facebook
            </button>

            <button
              onClick={() => router.push("/home")}
              className="text-white font-bold"
            >
              Continue to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}