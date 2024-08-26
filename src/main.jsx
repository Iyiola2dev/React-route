import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./contexts/ThemeProvider";
import { AuthProvider } from "./contexts/AuthProvider";

createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <ThemeProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </AuthProvider>
  </Router>
);
