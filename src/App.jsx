import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import ExtraInfo from "./components/ExtraInfo";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <div className={darkMode ? "main-content dark" : "main-content"}>
        <div className={darkMode ? "header dark" : "header"}>
          <h1>CALCULADORA DE IMC (Índice de Massa Corporal)</h1>
          <button
            onClick={handleDarkMode}
            className={darkMode ? "btn-darkMode dark" : "btn-darkMode"}
          >
            <i className={darkMode ? "bx  bx-moon dark" : "bx  bx-moon"}></i>
          </button>
        </div>

        <Calculator darkMode={!darkMode} />
        <ExtraInfo darkMode={!darkMode} />
      </div>
    </>
  );
}

export default App;
