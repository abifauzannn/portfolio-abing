// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";  // Import Home from the pages folder
import About from "./Pages/About"; // Import About from the pages folder

function App() {
  return (
    <Router>
      <Routes>
        {/* Updated to use element instead of component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
