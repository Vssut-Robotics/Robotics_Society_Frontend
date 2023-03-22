import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <HomeScreen/>
    </div>
  );
}

export default App;
