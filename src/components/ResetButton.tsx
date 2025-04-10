import React from "react";

interface ResetButtonProps {
  handleReset: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ handleReset }) => {
  return (
    <button
      onClick={handleReset}
      className="w-full bg-[#0c6b70] hover:bg-[#26c2ad] text-[#00474b] text-xl font-extrabold py-2 rounded"
    >
      RESET
    </button>
  );
};

export default ResetButton;
