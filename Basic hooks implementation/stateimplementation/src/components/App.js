import React from "react";
import { useState } from "react";
export default function App() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter + 1)}>increment</button>
      <button onClick={()=> setCounter(counter - 1)}>decrement</button>
      <button onClick={()=> setCounter(0)}>reset</button>
    </div>
  );
}
