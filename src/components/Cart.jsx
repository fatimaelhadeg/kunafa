import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdRemove, IoMdAdd } from "react-icons/io";

const Cart = () => {
  const {
    Cart,
    removeFromCart,
    clearCart,
    increasequantity,
    decreasequantity,
    Total,
    Quantity,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Professional WhatsApp link with cart + user info
  const generateWhatsAppLink = () => {
    if (Cart.length === 0) return "#";

  let message = `🛍️ *Nouvelle Commande*\n\n`;
message += `*Détails du client:*\n`;
message += `👤 Nom: ${formData.fullName}\n`;
message += `🏙 Ville: ${formData.city}\n`;
message += `📞 Téléphone: ${formData.phone}\n\n`;
message += `*Produits commandés:*\n`;

Cart.forEach((item, index) => {
  message += `${index + 1}. ${item.name} x${item.amount} - ${item.price * item.amount}dh\n`;
});

message += `\n*Total:* ${Total}dh\n`;
message += `\nMerci pour votre commande ! 🙏`;




    return `https://wa.me/212646237899?text=${encodeURIComponent(message)}`;
  };

  const handleOrder = () => {
    if (Cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!formData.fullName || !formData.city || !formData.phone) {
      alert("Please fill in all your details!");
      return;
    }

    // Open WhatsApp with professional message
    window.open(generateWhatsAppLink(), "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">
      
      {/* Left Section - Cart Items */}
      <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-semibold">Shop Cart</h1>
          <h1 className="text-lg">Items: ({Quantity})</h1>
          <FiTrash2
            onClick={clearCart}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-4 text-gray-700 font-semibold mt-6 pb-2 border-b">
          <span>Food</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        <div>
          {Cart.length > 0 ? (
            Cart.map(item => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center py-4 border-b text-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm flex items-center gap-1 mt-2"
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => decreasequantity(item.id)}
                    className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl"
                  >
                    <IoMdRemove />
                  </button>
                  <span className="text-lg">{item.amount}</span>
                  <button
                    onClick={() => increasequantity(item.id)}
                    className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl"
                  >
                    <IoMdAdd />
                  </button>
                </div>

                <p className="text-lg font-medium">${item.price}</p>
                <p className="text-lg font-semibold">${item.price * item.amount}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 mt-4">Your Cart is Empty</p>
          )}
        </div>
      </div>

      {/* Right Section - Cart Summary + Customer Info */}
      <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg pb-4">
        <h2 className="text-xl font-semibold border-b pb-4">Cart Summary</h2>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Items:</span>
          <span className="font-medium">{Quantity}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-medium">${isNaN(Total) ? 0 : Total}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Shipping</span>
          <span className="font-medium">Free</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Total Cost</span>
          <span className="font-medium">${isNaN(Total) ? 0 : Total}</span>
        </div>

        {/* Customer Details */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Your Details:</h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">City <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Ville"
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+212 6XXXXXXXX"
                className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleOrder}
          className="w-full bg-green-500 text-white py-3 mt-4 rounded text-lg hover:bg-green-600 transition"
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default Cart;
