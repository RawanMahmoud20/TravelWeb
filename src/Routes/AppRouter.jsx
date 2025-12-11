import React from "react";
import { Routes, Route } from "react-router-dom";

import Hotels from "../View/page/Hotels";
import Contact from "../View/page/Contact";
import Profile from "../View/page/Profile";
import Guides from './../View/page/Guides';
import Home from "../View/page/Home";
import Login from "../View/page/Login";
import Signup from '../View/page/Signup';
import ResetPassword from '../View/page/ResetPassword';
import TravelForm from "../View/component/FlightComponents/TravelForm";
import Cities from "../View/page/City";

const AppRouter  = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/TravelForm" element={<TravelForm />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />     
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* />
       />
      

*/}
    </Routes>
  );
};

export default AppRouter ;
