import React, { useState, useEffect } from "react";

const ticTacToeModel = [
  { index: "1", isX: false, isO: false },
  { index: "2", isX: false, isO: false },
  { index: "3", isX: false, isO: false },
  { index: "4", isX: false, isO: false },
  { index: "5", isX: false, isO: false },
  { index: "6", isX: false, isO: false },
  { index: "7", isX: false, isO: false },
  { index: "8", isX: false, isO: false },
  { index: "9", isX: false, isO: false },
];

const getData = (model: any) => {
  let isToUpdatedX = false;
  let countX = 0;
  let countY = 0;

  model.forEach((x) => {
    if (x.isX) {
      countX++;
    } else if (x.isO) {
      countY++;
    }
  });
  isToUpdatedX = countX === countY;

  console.log(countX, countY);

  return isToUpdatedX;
};

const WIN_LINES = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"], // rows
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"], // columns
  ["1", "5", "9"],
  ["3", "5", "7"], // diagonals
];

const TicTacToe = () => {
  const [winner, setWinner] = useState("");
  const checkForWinner = (model: typeof ticTacToeModel): "X" | "O" | null => {
    const getPlayer = (idx: string) => {
      const cell = model.find((x) => x.index === idx);
      return cell?.isX ? "X" : cell?.isO ? "O" : null;
    };

    for (const [a, b, c] of WIN_LINES) {
      const p = getPlayer(a);
      if (p && p === getPlayer(b) && p === getPlayer(c)) {
        return p;
      }
    }
    return null;
  };

  const [model, setModel] = useState(ticTacToeModel);
  let winnerL = checkForWinner(model);
  useEffect(() => {
    setWinner(winnerL);
  }, [model]);

  useEffect(() => {
    setModel(ticTacToeModel);
  }, [winner]);

  const isX = getData(model);

  const handleButtonClick = (obj: any) => {
    if (obj.isX || obj.isO) {
      return;
    }
    if (isX) {
      obj.isX = true;
    } else {
      obj.isO = true;
    }
    console.log("Obj", obj);
    let updatedModel = model.map((x) => (x.index === obj.index ? obj : x));
    console.log("updatedModel", updatedModel);
    setModel(updatedModel);
  };

  return (
    <div>
      <h1>TicTacToe {winner ? winner : ""}</h1>
      <button
        onClick={() => {
          setWinner(null);
        }}
      >
        Reset
      </button>

      <div
        style={{
          width: "25vw",
          background: "whiteSmoke",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!winner &&
          ticTacToeModel.map((x) => (
            <>
              <div
                style={{
                  height: "10vh",
                  border: "1px solid black",
                  width: "32.5%",
                }}
                onClick={() => handleButtonClick(x)}
              >
                {x.index}

                <h1>{x.isX ? "X" : x.isO ? "O" : ""}</h1>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default TicTacToe;
