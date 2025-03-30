import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import "./config/colors";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          // Default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Styling for success toasts
          success: {
            duration: 3000,
            style: {
              background: "#7CBDEEFF",
              color: "#fff",
            },
          },
          // Styling for error toasts
          error: {
            duration: 3000,
            style: {
              background: "#ff4b4b",
              color: "#fff",
            },
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
