// css import
import "./App.css";

// components import
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar/Navbar";

// context import
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="app-wrapper" data-theme={theme}>
          <Navbar />
          <Mainroutes />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
