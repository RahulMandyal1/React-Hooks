import React from "react";
import { useState } from "react";

function Objstate() {
  let [name, setName] = useState({ firstName: "", lastName: "" });


  return (
    <div>
      <input
        type="text"
        placeholder="enter your first name"
        name="firstName"
        value={name.firstName}
        onChange={(e)=>{
            setName({...name , firstName: e.target.value })
        }}
      />
      <input
        type="text"
        placeholder="enter your first name"
        name="lastName"
        value={name.lastName}
        onChange={(e)=>{
            setName({...name , lastName: e.target.value })
        }}
      />

      <h2> user full name is {name.firstName + " " + name.lastName}</h2>
    </div>
  );
}

export default Objstate;
