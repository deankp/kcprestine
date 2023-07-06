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
      <img
        className="lambo"
        src="https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1395&q=80"
        alt="lambo"
      />
    </div>
  );
}

export default App;
