// import "./App.css";
// import Example from "./Example/Example";
// import CalculatorProvider from "./TipCalculatorContext/CalculatorContext";
// import MainCalculator from "./TipCalculatorContext/MainCalculator";
// import TotalField from "./TipCalculatorContext/TotalField";
// import "../src/TipCalculatorContext/Styles/Style.css";

// function App() {
//   return (
//     <>
//       <div>
//         {/* <Example /> */}

//         {/* TEST 5 */}
//         <CalculatorProvider>
//           <div className="container">
//             <div className=" rounded-lg p-6 max-w-[400px]">
//               <MainCalculator />
//             </div>
//             <div className="max-w-[600px]">
//               <TotalField />
//             </div>
//           </div>
//         </CalculatorProvider>
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useContext } from "react";
import { FormContext } from "./FormProvider";
import EditableForm from "./EditableForm";


const App = () => {
  const { isAdmin, setIsAdmin } = useContext(FormContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <button
        onClick={() => setIsAdmin(!isAdmin)}
        className="mb-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        {isAdmin ? "Switch to User Mode" : "Switch to Admin Mode"}
      </button>
      <EditableForm />
    </div>
  );
};

export default App;
