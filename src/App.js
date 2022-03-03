import { useState } from "react";
import NewUser from "./componet/NewUser";
import Users from "./componet/Users";
import "./styles.css";

const USERS_DATA = [
  {
    id: "01",
    username: "fordy",
    password: "awesome123"
  },
  {
    id: "02",
    username: "john ",
    password: "yowhaha579"
  },
  {
    id: "03",
    username: "bryan",
    password: "lofi357"
  }
];

export default function App() {
  const [users, setUsers] = useState(USERS_DATA);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
    console.log(users);
  };

  return (
    <div className="App">
      <NewUser onAddUserHandler={addUserHandler} />
      <Users data={users} />
    </div>
  );
}
