import React from "react";

interface ResultDisplayProps {
  tipAmount: number;
  totalAmount: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  tipAmount,
  totalAmount,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Tip Amount */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm">Tip Amount</p>
          <p className="text-gray-400 text-xs">/ person</p>
        </div>
        <p className="text-[#2cbfad]  text-3xl font-bold">
          ${tipAmount.toFixed(2)}
        </p>
      </div>
      {/* Total */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white text-sm">Total</p>
          <p className="text-gray-400 text-xs">/ person</p>
        </div>
        <p className="text-[#2cbfad]  text-3xl font-bold">
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;
