import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from './pages/Homepage';
import FoodDetails from './pages/FoodDetails'
import Cart from './components/Cart'
import { Route,Routes } from "react-router-dom";
import {ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/food/:id" element={<FoodDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
