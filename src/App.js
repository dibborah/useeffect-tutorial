import { useState } from "react";
import MouseMoveEvent from "./MouseMoveEvent";

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
      {showComponent && <MouseMoveEvent />}
    </div>
  );
};

export default App;
