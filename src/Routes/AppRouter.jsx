import React from "react";
import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import Flights from "../View/page/Flight";
import Hotels from "../View/page/Hotels";
// import Contact from "../View/page/Contact";
// import Profile from "../View/page/Profile";
import Guides from './../View/page/Guides';

const AppRouter  = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/flights" element={<Flights />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/guides" element={<Guides />} />

      {/* />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
    */}
    </Routes>
  );
};

export default AppRouter ;
