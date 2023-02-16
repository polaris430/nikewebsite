import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
  return (
    <div className="App">
      <Section1 />
      <Nav />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
