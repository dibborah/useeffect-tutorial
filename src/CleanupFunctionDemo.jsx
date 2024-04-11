import { useEffect, useState } from "react";

const CleanupFunctionDemo = () => {
  console.log("CleanupFunctionDemo component rendered");
  const [counter, setIsCounter] = useState(0);

  // ### Initial render ko initial mount v kehte hain

  // useEffect => sideEffects
  // useEffect is all about side Effects
  // sideEffects matlab => Jo v kam REACT ke related nhi hain

  // Jo kam react ke related nahi hain (side kam)
  // Un kamo ko karne ke liye hum useEffect use karte hain
  // Examples of sideEffect are => fetching data from  api's
  // adding event Listeners (document.addEventListener("click", () => {}))

  useEffect(() => {
    console.log("Inside UseEffect callback");
    return function () {
      console.log("Inside Cleanup Function");
    };
  }, [counter]);
  // Cleanup Function
  // 1. When component unMount => unMount(component screen se haat jaye)
  // Before component unmount cleanup fc is shown
  // Component ke unmount hone se pehle cleanup fc show ho jata hain

  // 2. Subsequent renders
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setIsCounter((prevCounter) => prevCounter + 1)}>
        Increase
      </button>
    </div>
  );
};

export default CleanupFunctionDemo;
