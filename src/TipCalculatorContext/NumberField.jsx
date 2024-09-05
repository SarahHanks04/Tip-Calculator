import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";

const NumberField = () => {
  const { number, setNumber } = useContext(CalculatorContext);

  return (
    <div className="mb-4 text-left">
      <label className="text-white font-semibold mb-2">
        Number of People
      </label>
      <input
        type="number"
        value={number}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        onInput={(e) => setNumber(Number(e.target.value))}
      />
      {number === 0 && <p className="text-red-500 text-sm">Can't be zero</p>}
    </div>
  );
};

export default NumberField;
