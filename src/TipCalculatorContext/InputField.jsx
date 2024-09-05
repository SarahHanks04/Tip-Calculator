import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext';
import "./Styles/InputField.css"

const InputField = () => {
  const { bill, setBill } = useContext(CalculatorContext);

  return (
    <div className="input mb-4 text-left">
      <label htmlFor="bill" className="text-gray-600 font-semibold">Bill</label>
      <input
        type="number"
        value={bill}
        placeholder="$"
        className="w-full mt-3 p-3 rounded-lg focus:outline-none bg-emerald-50"
        onInput={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default InputField;
