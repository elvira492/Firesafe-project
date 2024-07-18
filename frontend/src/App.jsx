import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import "./index.css";

//import { useState, useEffect } from "react";

function App() {
  //hier backend
  /*   const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((response) => setData(response.message));
  }, []); */ //bis hier . anstatt hier zu fetchen habe ich in utils api.jsx

  return (
    <>
      <Header />
      <Outlet />

      {/*    <p>{!data ? "Loading..." : data}</p>{" "}
      hier etwas aus dem backend zeigen, вывести данные */}
    </>
  );
}

export default App;
