import { useState } from "react";

interface QuantityButtonProps {
  stock: number;
  initialCount?: number;
  onChange?: (count: number) => void;
}

export default function IncrementAndDecrementButton({
  stock,
  initialCount = 1,
  onChange,
}: QuantityButtonProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count < stock) {
      const newCount = count + 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  return (
    <div className="flex justify-start items-center gap-4 flex-wrap bg-[#DCDCDC]">
      <button
        onClick={decrement}
        disabled={count === 0}
        className={` flex justify-center items-center border-r-2 border-black/40 hover:border-[#0699CA] ${count === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        <b className="px-2 font-bold text-3xl text-[#0699CA] hover:text-blue-600 transition">-</b>
      </button>
      <h2 className="font-bold">{count}</h2>
      <button
        onClick={increment}
        disabled={count === stock}
        className={` flex justify-center items-center border-l-2 border-black/40 hover:border-[#0699CA] ${count === stock ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        <b className="px-2 font-bold text-2xl text-[#0699CA] hover:text-blue-600 transition">+</b>
      </button>
    </div>
  );
}