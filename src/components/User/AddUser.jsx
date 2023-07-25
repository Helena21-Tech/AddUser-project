import React, {useState} from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
const iNITIAL_STATE = {
    username: "",
    age: ""
  }
const AddUser = (props) => {
  const [userInput, setUserInput] = useState(iNITIAL_STATE);
  const userInputHandler = (action, data) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [action]: data
      }
    } )
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.getInput(userInput);
    setUserInput(iNITIAL_STATE);
  }
  return (  
    <Card className={styles.input}>
    <form onSubmit={submitHandler} >
          <label htmlFor="username">Username</label>
          <input type="text" value={userInput.username} id="username" onChange={(event) => userInputHandler ("username", event.target.value) }/>
          <label htmlFor="age">Age</label>
          <input type="number" value={userInput.age} id="age" onChange = {(event) => userInputHandler ("age", event.target.value) } />
        <Button action="submit"> Add User </Button> 
      </form>
      </Card>
  )
}

export default AddUser;