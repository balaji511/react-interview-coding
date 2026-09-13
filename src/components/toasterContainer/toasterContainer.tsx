import React, { useEffect, useState } from "react";

interface IToaster {
  type: "red" | "blue" | "green";
}

const ToasterContainer: React.FC = () => {
  const [toasterList, settoasterList] = useState<IToaster[]>([]);

  const handleToasterButtonClick = (toast: IToaster) => {
    settoasterList((p) => [...p, toast]);
  };

  const getToasterColor = (type: "red" | "blue" | "green") => {
    switch (type) {
      case "blue":
        return "lightBlue";
      case "green":
        return "lightGreen";
      case "red":
        return "red";
    }
  };

  const handleToasterShowAndHide = () => {
    settoasterList((prevList) => {
      if (prevList.length === 0) return prevList;
      return prevList.slice(1); // Removes the first (oldest) toaster
    });
  };
  useEffect(() => {
    let timer = setInterval(() => {
      handleToasterShowAndHide();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "whitesmoke",
          padding: "20px",
          display: "flex",
          gap: 20,
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => handleToasterButtonClick({ type: "red" })}
          style={{
            height: "50px",
            background: "red",
            width: "120px",
          }}
        >
          Red Color
        </button>
        <button
          onClick={() => handleToasterButtonClick({ type: "green" })}
          style={{
            height: "50px",
            background: "green",
            width: "120px",
          }}
        >
          Green Color
        </button>
        <button
          onClick={() => handleToasterButtonClick({ type: "blue" })}
          style={{
            height: "50px",
            width: "120px",
            background: "blue",
          }}
        >
          Blue Color
        </button>
      </div>
      <div style={{}}>
        {toasterList.slice(0, 3).map((toast: IToaster) => (
          <div
            style={{
              background: getToasterColor(toast.type),
              padding: "16px",
              margin: "8px",
            }}
          >
            {toast.type.toLocaleUpperCase()} {"  "} Toaster Message
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToasterContainer;
