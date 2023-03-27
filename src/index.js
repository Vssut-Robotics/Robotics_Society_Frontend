import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamScreen from "./screens/TeamScreen";
import Nav from "./components/Nav";
import FinalYearComponent from "./components/FinalYearComponent";
import FirstYearComponent from "./components/FirstYearComponent";
import ThirdYearComponent from "./components/ThirdYearComponent";
import SecondYearComponent from "./components/SecondYearComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      {/* <div className="navbar">
        <Nav />
      </div> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" Component={TeamScreen} />
        <Route path="/team/finalyear" Component={FinalYearComponent} />
        <Route path="/team/pre-finalyear" Component={ThirdYearComponent} />
        <Route path="/team/second-year" Component={SecondYearComponent} />
        <Route path="/team/first-year" Component={FirstYearComponent} />
      </Routes>
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
