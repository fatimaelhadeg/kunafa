import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out!");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  );
};

export default Logout;
