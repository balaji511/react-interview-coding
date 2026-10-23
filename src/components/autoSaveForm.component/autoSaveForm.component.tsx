import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const AutoSaveForm: React.FC = () => {
  const [isAutoSaveEnabled, setIsAutoSaveEnabed] = useState(true);
  const [isToSave, setIsToSave] = useState(false);
  const [userInput, setUserInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  console.log("IsToAutoSave ", isToSave);
  const autoSaveOrderHandler = async () => {
    if (isToSave) {
      console.log("AutosaveTriggered");
    } else {
      console.log("AutoSaveAlreadyTriggered");
    }
    setIsToSave(false);
  };

  useQuery({
    queryKey: ["auto-save-order"],
    queryFn: autoSaveOrderHandler,
    refetchInterval: 2000,
    enabled: isAutoSaveEnabled,
  });

  const handleInputChange = (e: any) => {
    setIsToSave(true);
    const { name, value } = e.target;
    setUserInputs((p) => ({ ...p, [name]: value }));
  };

  return (
    <div>
      <h1>AutoSaveForm</h1>
      <div>
        <label htmlFor="input1">Input1</label>
        <input
          id="input1"
          value={userInput.input1}
          name="input1"
          type="input"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <label htmlFor="input2">Input2</label>
        <input
          id="input2"
          value={userInput.input2}
          name="input2"
          type="input"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <label htmlFor="input3">Input3</label>
        <input
          id="input3"
          value={userInput.input3}
          name="input3"
          type="input"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <label htmlFor="input4">Input4</label>
        <input
          id="input4"
          value={userInput.input4}
          name="input4"
          type="input"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div>
        <label htmlFor="input5">Input5</label>
        <input
          id="input5"
          value={userInput.input5}
          name="input5"
          type="input"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <button onClick={() => setIsAutoSaveEnabed(false)}>
        Turn off Auto Save
      </button>
      <div>
        <h1 style={{ background: isToSave ? "green" : "red" }}>
          Auto Save: {isToSave ? "Enabled" : "Disabled"}
        </h1>
        <pre>{JSON.stringify(userInput)}</pre>
      </div>
    </div>
  );
};

export default AutoSaveForm;
