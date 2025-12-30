import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Homepage from './components/Homepage';
import FoodDetails from './pages/FoodDetails';
import Cart from './components/Cart';
import Totop from "./tactics/Totop";
import SafetyCen from "./pages/SafetyCen";
import Faqs from "./pages/Faqs";
import Local from "./pages/Local";
import HelpCen from "./pages/HelpCen";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const location = useLocation();

  return (
    <div>
      <ToastContainer />
      <Totop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Food/:id" element={<FoodDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/SafetyCen" element={<SafetyCen />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/local" element={<Local />} />
        <Route path="/helpCen" element={<HelpCen />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
