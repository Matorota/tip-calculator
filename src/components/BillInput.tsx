import React from "react";
import dollarIcon from "/icon-dollar.svg";
interface BillInputProps {
  bill: number;
  setBill: (value: number) => void;
  isError: boolean;
}

const BillInput: React.FC<BillInputProps> = ({ bill, setBill, isError }) => {
  const errorMessage =
    bill === 0 ? "Can't be zero" : bill < 0 ? "Can't be lower than 1" : "";

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <label className="block text-gray-600 text-sm">Bill</label>
        {isError && errorMessage && (
          <span className="text-red-500 text-sm font-bold">{errorMessage}</span>
        )}
      </div>
      <div className="relative">
        <img
          src={dollarIcon}
          alt="Dollar Icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
        />
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
          className={`w-full py-3 pl-12 pr-4 border rounded focus:outline-none focus:ring-2 bg-gray-100 text-right font-bold transition-all ${
            isError
              ? "border-red-500 focus:ring-red-500 text-red-500"
              : bill === 0
              ? "text-gray-400 border-gray-300 focus:ring-cyan-500 hover:border-[#93e3d8]"
              : "text-cyan-900 border-gray-300 focus:ring-cyan-500 hover:border-[#93e3d8]"
          }`}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default BillInput;
