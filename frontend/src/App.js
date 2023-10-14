import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import View_details from "./components/View_details";

const App = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view-details/:id" element={<View_details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
