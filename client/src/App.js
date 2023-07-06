import React, { useState, useEffect } from "react";
import "./CSS/App.css";
import Navbar from "./Components/Navbar";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <h2>KC Prestine</h2>
    </div>
  );
}

export default App;
