"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OnboardingFlow() {
    const [step, setStep] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (step === 0) {
            setTimeout(() => setStep(1), 3000);
        } else if (step === 1) {
            setTimeout(() => setStep(2), 4000);
        }
    }, [step]);

    const handleGetStarted = () => {
        localStorage.setItem("hasVisited", "true");
        router.push("/auth");
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            {step === 0 && (

                <div className="flex flex-col justify-center items-center w-full h-full text-center bg-[#7ACFDB]">
                    <Image
                        src="/assets/images/o-buy-no-bg-sm.png"
                        alt="O-Buy Logo"
                        width={120}
                        height={80}
                        className="mx-auto mb-4"
                    />

                    <h4 className="text-3xl text-white">Everything You Need, One Tap Away.</h4>
                </div>
            )}
            {step === 1 && (
                <div className="relative w-full h-screen bg-cover bg-center p-4" style={{ backgroundImage: "url('/assets/images/onboarding1.jpg')" }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/40 flex flex-col justify-center items-center">
                        <h2 className="text-white text-2xl font-semibold ">Discover More, Shop Smarter.</h2>
                        <h2 className="text-white text-2xl font-semibold ">Live Better..</h2>
                    </div>
                </div>

            )}
            {step === 2 && (
                <div
                    className="relative bg-cover bg-center w-full h-screen flex flex-col items-center justify-center p-4"
                    style={{ backgroundImage: "url('/assets/images/onboarding-woman2.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
                        <h2 className="text-white text-2xl mb-2 font-semibold">From Cart to Doorstep</h2>
                        <h2 className="text-white text-2xl mb-2 font-semibold">Fast, Easy,</h2>
                        <h1 className="text-white text-3xl mb-6 font-bold">O-Buy.</h1>
                        <button
                            onClick={handleGetStarted}
                            className="bg-[#7ACFDB] text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
