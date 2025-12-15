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
import TravelForm from "../View/component/CityComponents/TravelForm";
import Cities from "../View/page/City";
import HotelDetails from "../View/component/HotelComponents/HotelDetails";
import BookNow from './../View/component/Booking/Book';
import Checkout from './../View/component/Booking/Checkout';
import AddHotel from "../View/page/AddHotel";

const AppRouter  = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/TravelForm" element={<TravelForm />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/hotelsDetails" element={<HotelDetails />} />
      <Route path="/booking" element={<BookNow />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />     
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/add-hotel" element={<AddHotel />} />
    </Routes>
  );
};

export default AppRouter ;
