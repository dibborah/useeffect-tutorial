import { useState } from "react";
import ExampleFetchDataInStrictMode from "./ExampleFetchDataInStrictMode";
import CleanupFunctionDemo from "./CleanupFunctionDemo";

// clean up fc

// events
// adding event listeners

const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        id="showComponent"
        name="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent((prevCheck) => !prevCheck)}
      />
      {showComponent && <ExampleFetchDataInStrictMode />}
    </div>
  );
};

export default App;
