import React from "react";

const INITIAL_DATA = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Frontend Dev",
    department: "Engineering",
    score: 88,
    status: "Active",
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Product Designer",
    department: "Design",
    score: 94,
    status: "Active",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Backend Dev",
    department: "Engineering",
    score: 76,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Pooja Sharma",
    role: "QA Engineer",
    department: "QA",
    score: 82,
    status: "Active",
  },
  {
    id: 5,
    name: "Kiran Rao",
    role: "Engineering Lead",
    department: "Engineering",
    score: 91,
    status: "Active",
  },
  {
    id: 6,
    name: "Divya Nair",
    role: "DevOps Engineer",
    department: "Infrastructure",
    score: 68,
    status: "Inactive",
  },
  {
    id: 7,
    name: "Rohan Das",
    role: "Frontend Dev",
    department: "Engineering",
    score: 85,
    status: "Active",
  },
  {
    id: 8,
    name: "Ananya Roy",
    role: "Product Manager",
    department: "Product",
    score: 90,
    status: "Active",
  },
  {
    id: 9,
    name: "Manish Verma",
    role: "Data Analyst",
    department: "Analytics",
    score: 79,
    status: "Inactive",
  },
  {
    id: 10,
    name: "Meera Joshi",
    role: "UI/UX Designer",
    department: "Design",
    score: 87,
    status: "Active",
  },
  {
    id: 11,
    name: "Arjun Singh",
    role: "Security Engineer",
    department: "Infrastructure",
    score: 93,
    status: "Active",
  },
  {
    id: 12,
    name: "Bhavna Iyer",
    role: "Scrum Master",
    department: "Management",
    score: 81,
    status: "Inactive",
  },
];

const tableColumns = [
  {
    columnName: "Enable",
    accessor: "",
    sorted: null,
  },
  {
    columnName: "Name",
    sorted: null,
    accessor: "name",
  },
  {
    columnName: "Role",
    sorted: null,
    accessor: "role",
  },
  {
    columnName: "Status",
    sorted: null,
    status: "status",
    accessor: "status",
  },
];

const ListRendering: React.FC = () => {
  const renderCell = (cellType: any) => {
    switch (cellType) {
      case "checkBox":
        return <input type="checkbox" />;
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "90%",
        }}
      >
        <table
          style={{
            width: "100%",
          }}
        >
          <thead style={{}}>
            <tr style={{}}>
              {tableColumns.map((x: any) => (
                <th
                  style={{
                    textAlign: "left",
                  }}
                >
                  {x.columnName}

                  <button>
                    {x.sorted === null || !x.sorted ? "ASC" : "DESC"}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{}}>
            {INITIAL_DATA.map((x: any) => (
              <tr>
                {tableColumns.map((y: any) => (
                  <td>
                    {y.accessor === "status"
                      ? x[y.accessor]
                        ? "Active"
                        : "In Active"
                      : x[y.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRendering;
