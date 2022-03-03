import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <div>
      <p> Lifting up state:</p>
      <p>sample code </p>
      <p>Nag a-append. Lumalabas sa GUI</p>

      {props.data.map((everyUser) => (
        <UserItem
          key={everyUser.id}
          username={everyUser.username}
          password={everyUser.password}
        />
      ))}
    </div>
  );
};

export default Users;
