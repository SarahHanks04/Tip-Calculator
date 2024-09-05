import React from 'react';
import Select from './Select';
import InputField from './InputField';
import NumberField from './NumberField';

const MainCalculator = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg max-w-[400px] mx-auto p-8">
      <InputField />
      <Select />
      <NumberField />
    </div>
  );
};

export default MainCalculator;

