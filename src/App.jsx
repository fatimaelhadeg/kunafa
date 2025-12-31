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
import Login from "./auth/Login";
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
        <Route
          path="/login"
          element={
            <div className="grid w-full h-screen place-items-center
      bg-gradient-to-br from-[#e8cd95] via-[#d5bf98] to-[#8f754f]
      transition-all duration-700"
            >
              <div className="transition-all duration-500 h-100 ease-out hover:scale-[1.02]">
                <Login />
              </div>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
