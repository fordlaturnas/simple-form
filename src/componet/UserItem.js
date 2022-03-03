const UserItem = (props) => {
  const style = {
    border: "1px solid black"
  };
  return (
    <div style={{ padding: "5px", margin: "20px", border: "1px solid black" }}>
      <div>
        <span style={{ fontWeight: "bold" }}>UserName: </span>
        <span style={{ color: "red" }}>{props.username}</span>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>Password: </span>
        <span style={{ color: "red" }}>{props.password}</span>
      </div>
    </div>
  );
};

export default UserItem;
