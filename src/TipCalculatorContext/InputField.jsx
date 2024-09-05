import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext';
import "./Styles/InputField.css"

const InputField = () => {
  const { bill, setBill } = useContext(CalculatorContext);

  return (
    <div className="input mb-4 text-left">
      <label htmlFor="bill" className="text-white font-semibold mb-2">Bill</label>
      <input
        type="number"
        value={bill}
        placeholder="$"
        className="w-full px-3 rounded-lg"
        onInput={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default InputField;
