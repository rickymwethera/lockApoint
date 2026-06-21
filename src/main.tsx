import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter basename="/lockApoint">
    <App />
    </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>

);
