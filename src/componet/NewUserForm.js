import { useState } from "react";

const NewUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // cath username value in input field and set in state
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  // cath password value in input field and set in state
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  // #2 ↓
  const submitHandler = (event) => {
    // need to para di mag re-render ang page. normal behavior kasi ni web ang pag render ng page kapag sinabmit ang form.
    event.preventDefault();
    // validation muna bago mag proceed sa logic.
    if (enteredName === "" && enteredPassword === "") {
      console.log("wala kang nilagay!");
    } else {
      // nilagay sa object varaible, para mapasa sa props.onSaveNewUserData --> na galing sa parent component nya.
      const newUserData = {
        username: enteredName,
        password: enteredPassword
      };
      props.onSaveNewUserData(newUserData); // sending the data to NewUser.js via props. Yung props na to function sya kaya notice na may () parentheses.     galing sa NewUser.js (parent nya kung baga, one component ahead sa kanya)
      setEnteredName(""); // clearing the input field after ma-execute ang function na to
      setEnteredPassword(""); // clearing the input field after ma-execute ang function na to
    }
  };

  //  #1  ↓  once the form is submitted. submitHandler is triggered.
  return (
    <form onSubmit={submitHandler}>
      <p>Username</p>
      <input type="text" value={enteredName} onChange={nameChangeHandler} />

      <p>Password</p>
      <input
        type="text"
        value={enteredPassword}
        onChange={passwordChangeHandler}
      />
      <div>
        <button style={{ margin: "10px" }} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default NewUserForm;

/*

1. pagtapos ni user mag lagay ng details nya,
    pag click nya ng submit button
    matik na mati-trigger si onSubmit={submitHandler}

*/
