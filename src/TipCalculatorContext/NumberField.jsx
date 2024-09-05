import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";

const NumberField = () => {
  const { number, setNumber } = useContext(CalculatorContext);

  return (
    <div className="mb-4 text-left">
      <label className="text-gray-600 font-semibold mb-2">
        Number of People
      </label>
      <input
        type="number"
        min={0}
        value={number}
        className="bg-emerald-50 w-full px-3 py-2 border rounded-lg focus:outline-none"
        onInput={(e) => setNumber(Number(e.target.value))}
      />
      {number === 0 && <p className="text-red-500 text-sm">Can't be zero</p>}
    </div>
  );
};

export default NumberField;
