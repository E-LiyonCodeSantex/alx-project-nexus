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
    <div className="flex justify-start items-center gap-2 flex-wrap">
      <button
        onClick={decrement}
        disabled={count === 0}
        className={`bg-[#0699CA] text-white flex justify-center items-center font-bold text-3xl w-[35px] h-[35px] rounded-xl hover:bg-blue-600 transition ${
          count === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        -
      </button>
      <h2 className="font-bold">{count}</h2>
      <button
        onClick={increment}
        disabled={count === stock}
        className={`bg-[#0699CA] text-white flex justify-center items-center font-bold text-3xl w-[35px] h-[35px] rounded-xl hover:bg-blue-600 transition ${
          count === stock ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        +
      </button>
    </div>
  );
}