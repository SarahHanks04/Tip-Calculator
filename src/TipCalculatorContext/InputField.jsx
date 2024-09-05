import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext';

const InputField = () => {
  const { bill, setBill } = useContext(CalculatorContext);

  return (
    <div className="mb-4 text-left">
      <label htmlFor="bill" className="text-white font-semibold mb-2">Bill</label>
      <input
        type="number"
        value={bill}
        placeholder="$"
        className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring"
        onInput={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default InputField;
