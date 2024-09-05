import React from 'react';
import Select from './Select';
import InputField from './InputField';
import NumberField from './NumberField';
import "./Styles/main.css"

const MainCalculator = () => {
  return (
    <div className="main max-w-[400px] p-8">
      <InputField />
      <Select />
      <NumberField />
    </div>
  );
};

export default MainCalculator;

