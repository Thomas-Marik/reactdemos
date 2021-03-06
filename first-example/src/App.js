import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
