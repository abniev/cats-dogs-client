import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AnimalsProvider } from "./context/Animals.context.jsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimalsProvider>
        <App />
      </AnimalsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
