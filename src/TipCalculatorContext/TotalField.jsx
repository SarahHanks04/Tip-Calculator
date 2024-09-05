import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext"
import "./Styles/TotalField.css";

const TotalField = () => {
  const { sumUpAmount, reset } = useContext(CalculatorContext);
  const { amount, totalAmount } = sumUpAmount();

  return (
    <div className="total mt-2 bg-[#00494d] text-white p-4 rounded-lg">
      <div className="mb-8 text">
        <div className="flex gap-8">
          <div>
            <p className="block text-sm font-semibold">Tip Amount</p>
            <span className="text-[10px]">/ person</span>
          </div>
          <p className=" value text-xl">${amount.toFixed(2)}</p>
        </div>
        <div className="flex gap-8 mt-[3rem]">
          <div>
            <p className="block text-sm font-semibold">Total</p>
            <span className="text-[10px]">/ person</span>
          </div>
          <p className="value text-xl">${totalAmount.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={reset}
        className="reset w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-[5rem]"
      >
        RESET
      </button>
    </div>
  );
};

export default TotalField;
