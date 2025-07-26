import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UsersList from "./pages/UsersList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Home from "./pages/Home"; 
import BookingsList from "./pages/BookingsList";
import AdminLogin from "./pages/AdminLogin";
import AdminBookings from "./pages/AdminBookings";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <>
   
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/bookingslist" element={<BookingsList />} />       
        <Route path="/users" element={<UsersList />} />  
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-bookings" element={<AdminBookings />} />     
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
   

      <Footer />
      
    </>
  );
}

export default App;
