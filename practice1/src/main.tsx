import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./components/Route";
import Router from "./components/Router";
import "./index.css";
import About from "./pages/About";
import Root from "./pages/Root";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
