import React, { useState } from "react";
import "./AddForm.css";
import Errormodal from "../UI/Errormodal";
const AddForm = (props) => {
  const [U_Name, setUname] = useState("");
  const [U_age, setUage] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setUname(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUage(event.target.value);
  };

  const savedataFunction = (event) => {
    event.preventDefault();

    if (U_Name.trim().length === 0 || U_age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if(+U_age<1){
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (non-negative values).",
      });
      return;
    }

    props.onSaveUserData(U_Name, U_age);
    setUname("");
    setUage("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>{
      error &&
      <Errormodal
      title={error.title}
      message={error.message}
      onConfirm={errorHandler}/>
      }
      
    <form onSubmit={savedataFunction}>
      <div className="username-controls">
        <div className="username-control">
          <label>UserName</label>
          <input
            type="text"
            value={U_Name}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="username-control">
          <label>Age(Years)</label>
          <input
            type="number"
            value={U_age}
            onChange={ageChangeHandler}
          ></input>
        </div>
      </div>
      <button type="submit">Add User</button>
    </form>
    </div>
  );
};

export default AddForm;
