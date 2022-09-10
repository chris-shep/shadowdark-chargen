import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/OldNewspaperTypes.ttf";
import "./index.css";

// Create React app on the root element
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
