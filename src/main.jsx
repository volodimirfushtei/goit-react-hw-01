import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import App from "./App.jsx";
// Render the App component in the #root div in the DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
