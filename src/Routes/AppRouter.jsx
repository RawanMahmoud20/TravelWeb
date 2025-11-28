import React from "react";
import { Routes, Route } from "react-router-dom";

import Flights from "../View/page/Flight";
import Hotels from "../View/page/Hotels";
// import Contact from "../View/page/Contact";
// import Profile from "../View/page/Profile";
import Guides from './../View/page/Guides';
import Home from "../View/page/Home";
import TravelForm from "../View/component/FlightComponents/TravelForm";

const AppRouter  = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/TravelForm" element={<TravelForm />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/guides" element={<Guides />} />
      {/* />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<login />} />

*/}
    </Routes>
  );
};

export default AppRouter ;
