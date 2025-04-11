import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import your Home component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the routes for your app */}
        <Route path="/" element={<Home />} />
        {/* Add more routes here for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
