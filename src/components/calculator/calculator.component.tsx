import React, { useState } from "react";

const numbersBtns = [
  { name: "0", value: "0" },
  { name: "1", value: "1" },
  { name: "2", value: "2" },
  { name: "3", value: "3" },
  { name: "4", value: "4" },
  { name: "5", value: "5" },
  { name: "6", value: "6" },
  { name: "7", value: "7" },
  { name: "8", value: "8" },
  { name: "9", value: "9" },
];

const calculationOper = [
  { name: "+", value: "+" },
  { name: "−", value: "-" },
  { name: "×", value: "*" },
  { name: "÷", value: "/" },
];

const Calculator: React.FC = () => {
  const [calcString, setcalcString] = useState("");

  const handleCalculationLogic = (val: string) => {
    setcalcString((prev) => {
      const lastChar = prev.slice(-1);

      if (/[+\-*/=]/.test(lastChar) && /[+\-*/=]/.test(val)) {
        return prev;
      }

      return prev + val;
    });
  };

  return (
    <div>
      <h1>Calculator </h1>
      <button onClick={() => setcalcString(String(eval(calcString)))}>
        Calculate
      </button>

      <input value={calcString} placeholder="Enter Data for Cal" />
      <div>
        {numbersBtns.map((x) => (
          <>
            <button onClick={() => handleCalculationLogic(x.value)}>
              {x.name}
            </button>
          </>
        ))}
      </div>
      <div>
        {calculationOper.map((x) => (
          <>
            <button onClick={() => handleCalculationLogic(x.value)}>
              {x.name}
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
