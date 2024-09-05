import "./App.css";
import Example from "./Example/Example";
import CalculatorProvider from "./TipCalculatorContext/CalculatorContext";
import MainCalculator from "./TipCalculatorContext/MainCalculator";
import TotalField from "./TipCalculatorContext/TotalField";

function App() {
  return (
    <>
      <div>
        {/* <Example /> */}

        {/* TEST 5 */}
        <CalculatorProvider>
          <div className="bg-gray-100 p-6 flex justify-center items-start gap-8 mt-10 mx-auto max-w-[600px]-lg">
            <MainCalculator />
            <div className="max-w-[400px]">
              <TotalField />
            </div>
          </div>
        </CalculatorProvider>
      </div>
    </>
  );
}

export default App;
