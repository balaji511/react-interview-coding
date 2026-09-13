import React, { useEffect, useState } from "react";

const UserListRender: React.FC = () => {
  const [users, setusers] = useState([]);
  const [searchInput, setsearchInput] = useState<string>("");
  const [debouncedSerachInput, setdebouncedSerachInput] = useState("");
  const [editedUser, seteditInput] = useState({});

  const getUsers = async () => {
    const apiUrl = "https://fakestoreapi.com/users";
    const apiResponse = await fetch(apiUrl);
    let data = await apiResponse.json();
    data = data.map((x: any) => {
      return { ...x, isEditMode: false };
    });
    setusers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setdebouncedSerachInput(searchInput);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const filteredUsers = users.filter((user: any) =>
    user["name"].firstname.includes(debouncedSerachInput),
  );

  const handleDeleteUsers = (deletedUser: any) => {
    // const updatedList = users.map((x: any) => x.includes(deletedUser.email));
    console.log("====================================");
    console.log(deletedUser);
    console.log("====================================");
    setusers((p) =>
      p.filter(
        (x: any) => x.email.toUpperCase() !== deletedUser.email.toUpperCase(),
      ),
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "whitSmoke",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          paddingTop: "20px",
        }}
      >
        <h1>Users {users.length}</h1>
        <input
          value={searchInput}
          name="balaji"
          placeholder="search user"
          onChange={(e) => setsearchInput(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "60vw",
          }}
        >
          {filteredUsers.map((user: any) => (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                {user.isEditMode ? (
                  <input value={editInput} />
                ) : (
                  <p>{user["name"].firstname + "  " + user["name"].lastname}</p>
                )}
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  gap: 10,
                }}
              >
                <button
                  onClick={() => {
                    setusers((p: any) =>
                      p.map((x: any) => {
                        return {
                          ...x,
                          isEditMode:
                            x.email.toUpperCase() ===
                              user.email.toUpperCase() && !x.isEditMode,
                        };
                      }),
                    );

                    seteditInput(
                      user["name"].firstname + "  " + user["name"].lastname,
                    );
                  }}
                >
                  {!user.isEditMode ? "Edit" : "Confirm"}
                </button>
                <button onClick={() => handleDeleteUsers(user)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListRender;
