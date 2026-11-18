import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { StudentProvider } from "./context/StudentContext.jsx";
import "./index.css";

// HashRouter keeps the route after "#" (e.g. /#/favourites), so static hosts
// like GitHub Pages never need to resolve the route on the server.
// With BrowserRouter, a refresh or a sub-path deploy gives a 404 / blank page.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <StudentProvider>
        <App />
      </StudentProvider>
    </HashRouter>
  </React.StrictMode>
);
