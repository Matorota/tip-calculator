import React from "react";
import personIcon from "/icon-person.svg";

type Props = {
  people: number;
  setPeople: (value: number) => void;
  isError: boolean;
};

const PeopleInput: React.FC<Props> = ({ people, setPeople, isError }) => {
  const errorMessage =
    people === 0 ? "Can't be zero" : people < 0 ? "Can't be lower than 1" : "";

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <label className="block text-gray-600 text-sm">Number of People</label>
        {isError && errorMessage && (
          <span className="text-red-500 text-sm font-bold">{errorMessage}</span>
        )}
      </div>
      <div className="relative">
        <img
          src={personIcon}
          alt="Person Icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
        />
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(parseInt(e.target.value) || 0)}
          className={`w-full py-3 pl-12 pr-4 border rounded focus:outline-none focus:ring-2 bg-gray-100 text-right font-bold transition-all ${
            isError
              ? "border-red-500 focus:ring-red-500 text-red-500"
              : people === 0
              ? "text-gray-400 border-gray-300 focus:ring-cyan-500 hover:border-[#93e3d8]"
              : "text-cyan-900 border-gray-300 focus:ring-cyan-500 hover:border-[#93e3d8]"
          }`}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default PeopleInput;
