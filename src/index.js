import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// strict mode => development ke liye
// strict mode ---> strictly used for development purpose only
// strict mode is not applied when website is live on production server

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
