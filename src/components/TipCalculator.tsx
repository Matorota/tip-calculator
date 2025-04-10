import React, { useState } from "react";
import BillInput from "./BillInput";
import TipSelector from "./TipSelector";
import PeopleInput from "./PeopleInput";
import ResultDisplay from "./ResultDisplay";
import ResetButton from "./ResetButton";

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [isBillError, setBillError] = useState<boolean>(false);
  const [isPeopleError, setPeopleError] = useState<boolean>(false);

  const tipAmount =
    bill && people ? (bill * (tipPercentage / 100)) / people : 0;
  const totalAmount =
    bill && people ? (bill + bill * (tipPercentage / 100)) / people : 0;

  const handleReset = () => {
    const billError = bill === 0;
    const peopleError = people === 0;

    setBillError(billError);
    setPeopleError(peopleError);

    if (!billError && !peopleError) {
      setBill(0);
      setPeople(1);
      setTipPercentage(0);
      setBillError(false);
      setPeopleError(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <BillInput bill={bill} setBill={setBill} isError={isBillError} />
        <TipSelector
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />
        <PeopleInput
          people={people}
          setPeople={setPeople}
          isError={isPeopleError}
        />
      </div>
      <div className="bg-[#00474b] text-[#26c2ad] p-6 rounded-lg flex flex-col justify-between">
        <ResultDisplay tipAmount={tipAmount} totalAmount={totalAmount} />
        <ResetButton handleReset={handleReset} />
      </div>
    </div>
  );
};

export default TipCalculator;
