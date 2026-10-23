import React from "react";
import ReactDOM from "react-dom";

const ReactPortal = (isOpen: boolean = false) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div>
      <h1>Balaji</h1>
    </div>,
    document.body,
  );
};

export default ReactPortal;
