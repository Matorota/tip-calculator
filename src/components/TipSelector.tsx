import React, { useState } from "react";

type Props = {
  tipPercentage: number;
  setTipPercentage: (value: number) => void;
};

const TipSelector: React.FC<Props> = ({ tipPercentage, setTipPercentage }) => {
  const tipOptions = [5, 10, 15, 25, 50];

  const [customTip, setCustomTip] = useState<number | null>(null);

  const handleTipClick = (tip: number) => {
    setCustomTip(null);
    setTipPercentage(tip);
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setCustomTip(value);
    setTipPercentage(value);
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-600 text-sm mb-2">Select Tip %</label>
      <div className="grid grid-cols-3 gap-4">
        {tipOptions.map((tip) => (
          <button
            key={tip}
            onClick={() => handleTipClick(tip)}
            className={`py-2 rounded text-white text-lg font-extrabold ${
              tipPercentage === tip && customTip === null
                ? "bg-[#26c2ad] text-cyan-900 "
                : "bg-[#00474b] hover:bg-[#93d4cc] text-white"
            }`}
          >
            {tip}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={customTip !== null ? customTip : ""}
          onChange={handleCustomTipChange}
          className="py-2 px-2 text-center  rounded bg-gray-100 text-cyan-900 font-extrabold focus:outline-none border-0 focus:ring-2 focus:ring-[#93e3d8]"
        />
      </div>
    </div>
  );
};

export default TipSelector;
