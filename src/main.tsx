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
              background: "#caf0f8",
              color: "#ff6b35",
            },
          },
          // Styling for error toasts
          error: {
            duration: 3000,
            style: {
              background: "#d00000",
              color: "#000",
            },
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
