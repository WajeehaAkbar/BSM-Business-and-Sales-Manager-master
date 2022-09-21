import { Route, Routes } from "react-router-dom";
import React from "react";
import SideDashboard from "./Components/Dashboard";
import Verify from "./Components/Verify";
import Package from "./Components/packageplans";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SideDashboard />} />
        <Route path="/Package" element={<Package />} />

        <Route path="/Verify" element={<Verify/>} />
      </Routes>
    </>
  );
}

export default App;
