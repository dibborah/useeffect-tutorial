import { useState } from "react";
import CleanupFunctionDemo from "./CleanupFunctionDemo";

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
      {showComponent && <CleanupFunctionDemo />}
    </div>
  );
};

export default App;
