import "./App.css";
import Example from "./Example/Example";
import CalculatorProvider from "./TipCalculatorContext/CalculatorContext";
import MainCalculator from "./TipCalculatorContext/MainCalculator";
import TotalField from "./TipCalculatorContext/TotalField";
import "../src/TipCalculatorContext/Styles/Style.css";

function App() {
  return (
    <>
      <div>
        {/* <Example /> */}

        {/* TEST 5 */}
        <CalculatorProvider>
          <div className="container">
            <div className=" rounded-lg p-6 max-w-[400px]">
              <MainCalculator />
            </div>
            <div className="max-w-[600px]">
              <TotalField />
            </div>
          </div>
        </CalculatorProvider>
      </div>
    </>
  );
}

export default App;
