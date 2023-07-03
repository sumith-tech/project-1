import React, { useState } from "react";
import UserList from "./Components/Newuser/UserList";
import AddForm from "./Components/Newuser/AddForm";
function App() {
  const [userdata, setuserdata] = useState([]);

  const saveUserData = (Uname, Uage) => {
    setuserdata((preval) => {
      return [
        ...preval,
        { name: Uname, age: Uage, id: Math.random().toString() },
      ];
    });
  };
console.log(userdata)
  return (
    <div>
      <AddForm onSaveUserData={saveUserData}></AddForm>
      <UserList users={userdata}></UserList>
    </div>
  );
}

export default App;
