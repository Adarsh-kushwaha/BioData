import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if(username.trim().length===0 || age.trim().length===0){
      return setError({
        title: "Invalid Input",
        message:"Please enter correct name and age"
      });
    }

    if(+age < 1){
      return setError({
        title: "Invalid Age",
        message:"Age should be greater than 0"
      });
    }
    props.onAdd(username, age)
    setUsername("");
    setAge("");
    
  };

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()
  

  const usernameHandler = (event) => {
    setUsername(event.target.value);
    
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

const errorHandle =()=>{
  setError(null)
}


  return (
    <>
    {error && <Modal title={error.title} message={error.message} removeModal={errorHandle}/>}
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={usernameHandler} />
        <label htmlFor="age">Your Age</label>
        <input type="number" id="age" value={age} onChange={ageHandler} />
        <Button>Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
