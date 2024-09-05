import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");

  function sumUpAmount () {
    let amount, totalAmount;

    if (number > 0) {
      amount = (bill * percentage) / 100;
      totalAmount = bill + amount;

      return {
        amount: amount / number,
        totalAmount: totalAmount / number,
      };
    } else {
      return {
        amount: 0,
        totalAmount: 0,
      };
    }
  };

  const reset = () => {
    setBill("");
    setPercentage("");
    setNumber("");
  };

  
  const value = {
    bill,
    setBill,
    percentage,
    setPercentage,
    number,
    setNumber,
    sumUpAmount,
    reset,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
