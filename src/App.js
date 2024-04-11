import { useState } from "react";
import ExampleFetchData from "./ExampleFetchData";

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
      {showComponent && <ExampleFetchData />}
    </div>
  );
};

export default App;
