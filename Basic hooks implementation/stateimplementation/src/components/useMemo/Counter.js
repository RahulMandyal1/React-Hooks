import { useState , useMemo } from "react";

export default function MemoExample() {
  let [counterOne, setCounterOne] = useState(0);
  let [counterTwo, setCounterTwo] = useState(0);

  const incrementCountOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCountTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  let isEven = useMemo(()=>{
    return getEvenorOdd(counterOne);
  } , [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCountOne}>Count One - {counterOne}</button>
        <span> {isEven ? "Even" : "odd"}</span>
      </div>

      <div>
        <button onClick={incrementCountTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );

  // function that will take our memory resources
  function getEvenorOdd(number) {
    let i = 0;
    while (i < 2000000) i++;
    return number % 2 === 0;
  }
}
