import React, {useState} from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

const App = () => {
  let message = "";
  const [userData, setUserData] = useState([]);
  const [isValid, setIsValid] = useState({
    validity: true,
    errorMessage: "",
  });
  const getInputHandler = (userInput) => {
    if (userInput.username === "" || userInput.age === "") {
      setIsValid((prevState) =>{
        return {
          ...prevState,
          validity: false,
          errorMessage: "Please enter a valid name and age (non-empty values)"
        }
      });
    } else {
      setIsValid((prevState) =>{
        return {
          ...prevState,
          validity: false,
          errorMessage: "Please enter a valid age(>0)"
        }
      });
    }
    if (userInput.username === "" || userInput.age === "" || userInput.age <= 0) {
      return;
    }
    setUserData((prevState) => {
      return [
        ...prevState,
        userInput
      ]
    })
  }
  const toggleModalHandler = () => {
    setIsValid((prevState) => {
      return {
        ...prevState,
        validity: true
      }
    })
  }
  return (
    <>
      {!isValid.validity && <ErrorModal onClick={toggleModalHandler} message={isValid.errorMessage} />}
      <AddUser getInput= {getInputHandler} />
      <UsersList users={userData} />
    </>
  )
}

export default App;