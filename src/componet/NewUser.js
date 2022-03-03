import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
  const saveNewUserDataHandler = (enteredNewUser) => {
    const newUserAdded = {
      ...enteredNewUser,
      id: Math.random().toString()
    };
    console.log("In NewUser.js  ---> App.js");
    props.onAddUserHandler(newUserAdded);
  };
  return (
    <div>
      <NewUserForm onSaveNewUserData={saveNewUserDataHandler} />
    </div>
  );
};

export default NewUser;
