// useEffect usage

import { useEffect, useState } from "react";

// fetching data from api
// eventListeners
// sideEffect

// React < 16 => Class based components
// react life cycle methods => class based components => (componentDidMount)

// hook RULE => only can be used inside the components
// Any hook can't be used outside of a component

// useEffect => It takes callback fc as an input

// useEffect wala callback agar useEffect main only input hain to
// useEffect wala callback harbar chalega jab v hamara component re-render hoga
// jab v hamara component re-render hoga hamara useEffect wala callback chalega
// agar useEffect main callback only input hain

// useEffect:

// 1st arguement : callback FUNCTION
// 2nd arguement : dependency ARRAY

// # Matlab hum useEffect main ARRAY pass kar skte hain

// dependency array
// [] ---> useEffect will be called only once that also only in the initial render

// useEffect with 3 cases:
// 1. No passing of dependency array(No Second Arguement)
// 2. Passing empty dependency Array(Second Arguement)
// 3. Passing dependency Array with a value/State(Second Arguement)

const ExampleUseEffect = () => {
  console.log("ExampleUseEffect component rendered");
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  useEffect(() => {
    console.log("Inside useEffect");
  }, [counter2]);
  return (
    <div>
      <div>
        <h2>Counter: {counter1}</h2>
        <button onClick={() => setCounter1((prevState) => prevState + 1)}>
          Increase counter 1
        </button>
      </div>
      <div>
        <h2>Counter: {counter2}</h2>
        <button onClick={() => setCounter2((prevState) => prevState + 1)}>
          Increase counter 2
        </button>
      </div>
      <div>
        <h2>Counter: {counter3}</h2>
        <button onClick={() => setCounter3((prevState) => prevState + 1)}>
          Increase counter 3
        </button>
      </div>
    </div>
  );
};

export default ExampleUseEffect;
