import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";

const TotalField = () => {
  const { sumUpAmount, reset } = useContext(CalculatorContext);
  const { amount, totalAmount } = sumUpAmount();

  return (
    <div className="mt-6 bg-teal-600 text-white p-4 rounded-lg">
      <div className="mb-8">
        <div className="flex gap-8">
          <div>
            <p className="block text-sm font-semibold">Tip Amount</p>
            <span className="text-sm">/ person</span>
          </div>
          <p className="text-xl">${amount.toFixed(2)}</p>
        </div>
        <div className="flex gap-8 mt-6">
          <div>
          <p className="block text-sm font-semibold">Total</p>
          <span className="text-sm">/ person</span>
          </div>
          <p className="text-xl">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <button
      onClick={reset}
        className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
      >
        RESET
      </button>
    </div>
  );
};

export default TotalField;
