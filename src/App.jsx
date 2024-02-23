import { useState } from "react";
import "./App.css";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Mainroutes />
    </>
  );
}

export default App;
