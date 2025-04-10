import TipCalculator from "./components/TipCalculator";
import logo from "../public/logo.svg";

function App() {
  return (
    <div className=" sm:pt-12sm:p-0 p-10 md:p-12 h-auto  min-h-screen bg-cyan-100 flex flex-col items-center justify-center wi">
      <img src={logo} alt="Splitter Logo" className="mb-12 w-16 h-auto" />

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <TipCalculator />
      </div>
    </div>
  );
}

export default App;
