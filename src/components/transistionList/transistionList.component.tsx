import React, { useState } from "react";

const INITIAL_ITEMS = [
  { id: 1, label: "User Management (IAM)", category: "Security" },
  { id: 2, label: "Audit Log Viewer", category: "Compliance" },
  { id: 3, label: "Database Connection Pool", category: "Infrastructure" },
  { id: 4, label: "API Gateway Routes", category: "Networking" },
  { id: 5, label: "Billing & Invoices", category: "Finance" },
  { id: 6, label: "Webhook Subscriptions", category: "Integrations" },
  { id: 7, label: "Role-Based Access Control", category: "Security" },
  { id: 8, label: "SSL Certificate Manager", category: "Infrastructure" },
];

const TransistionList: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState([...INITIAL_ITEMS]);
  const [nonselectedItems, setnonSelectedItems] = useState([]);

  const handleMoveItems = (item: any, type: any) => {
    if (type === "NON_SELECTED") {
      let isNotDuplicate = nonselectedItems.find((x: any) => x.id === item.id);
      if (!isNotDuplicate) {
        setnonSelectedItems((p) => [...p, item]);
        setSelectedItems((p) => [...p.filter((x) => x.id !== item.id)]);
      }
    } else if (type === "SELECTED") {
      let isNotDuplicate = selectedItems.find((x: any) => x.id === item.id);
      console.log(isNotDuplicate);
      if (!isNotDuplicate) {
        setSelectedItems((p) => [...p, item]);
        setnonSelectedItems((p) => [...p.filter((x) => x.id !== item.id)]);
      }
    } else {
      setnonSelectedItems([]);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
      }}
    >
      <div
        className="Tables Section"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <h1 style={{ color: "blue" }}>Selected Items</h1>
          {selectedItems.map((x: any) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px blue solid",
              }}
            >
              <h3>{x.label}</h3>{" "}
              <button
                onClick={() => handleMoveItems(x, "NON_SELECTED")}
                style={{
                  marginRight: "20px",
                }}
              >
                {">"}
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <h1 style={{ color: "red" }}>Non Selected Items</h1>
          {nonselectedItems.map((x: any) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px blue solid",
              }}
            >
              <button
                onClick={() => handleMoveItems(x, "SELECTED")}
                style={{
                  marginLeft: "20px",
                }}
              >
                {"<"}
              </button>
              <h3>{x.label}</h3>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransistionList;
