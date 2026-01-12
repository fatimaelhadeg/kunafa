// Cart.jsx
import React, { useContext, useState } from "react";
import { ShopContext } from "./ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp link
  const generateWhatsAppLink = () => {
    if (Cart.length === 0) return "#";

    let message = `🛍️ *My Order*\n\n`;
    message += `*My Details:*\n👤 ${formData.fullName}\n🏙 ${formData.city}\n📞 ${formData.phone}\n\n`;
    message += `*Ordered Products:*\n`;

    Cart.forEach((item, index) => {
      if (item.title) {
        message += `${index + 1}. ${item.title}\n`;
        if (item.pieces) message += `   • ${item.pieces}\n`;
        if (item.bonus && item.bonus !== "0") message += `   • Bonus: ${item.bonus}\n`;
        message += `   • Price: ${item.price}\n`;
      } else {
        const name = item.key ? t(`food.${item.key}.name`) : "Unknown";
        message += `${index + 1}. ${name} x${item.amount} - ${item.price * item.amount} DH\n`;
      }
    });

    message += `\n*Total:* ${Total} DH\n`;
    message += `\nPlease confirm my order 🙏`;

    return `https://wa.me/212646237899?text=${encodeURIComponent(message)}`;
  };

  const handleOrder = () => {
    if (Cart.length === 0) return alert(t("cart.empty"));
    if (!formData.fullName || !formData.city || !formData.phone) return alert(t("cart.fillDetails"));
    window.open(generateWhatsAppLink(), "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col lg:flex-row gap-8">
      {/* LEFT */}
      <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-semibold">{t("cart.title")}</h1>
          <h1 className="text-lg">{t("cart.items")}: ({Quantity})</h1>
          <FiTrash2 onClick={clearCart} className="text-red-500 text-2xl cursor-pointer" />
        </div>

        <div className="grid grid-cols-4 text-gray-700 font-semibold mt-6 pb-2 border-b">
          <span>{t("cart.food")}</span>
          <span>{t("cart.quantity")}</span>
          <span>{t("cart.price")}</span>
          <span>{t("cart.total")}</span>
        </div>

        {Cart.length > 0 ? (
          Cart.map((item, index) => (
            <div key={index} className="grid grid-cols-4 items-center py-4 border-b text-gray-700">
              <div className="flex items-center space-x-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || (item.key ? t(`food.${item.key}.name`) : "Product")}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                )}
                <div>
                  {item.title ? (
                    <>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.pieces && <p className="text-sm text-green-600">{item.pieces}</p>}
                      {item.bonus && item.bonus !== "0" && <p className="text-sm text-orange-600">Bonus: {item.bonus}</p>}
                    </>
                  ) : (
                    <h3 className="font-semibold">{item.key ? t(`food.${item.key}.name`) : "Unknown"}</h3>
                  )}
                  <button onClick={() => removeFromCart(item.id || item.title)} className="text-red-500 text-sm flex items-center gap-1 mt-2">
                    <FiTrash2 /> {t("cart.remove")}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {item.amount ? (
                  <>
                    <button onClick={() => decreasequantity(item.id)} className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl"><IoMdRemove /></button>
                    <span className="text-lg">{item.amount}</span>
                    <button onClick={() => increasequantity(item.id)} className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl"><IoMdAdd /></button>
                  </>
                ) : (
                  <span>-</span>
                )}
              </div>

              <p className="text-lg font-medium">{item.amount ? `DH${item.price}` : item.price}</p>
              <p className="text-lg font-semibold">{item.amount ? `DH${item.price * item.amount}` : item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">{t("cart.empty")}</p>
        )}
      </div>

      {/* RIGHT */}
      <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg pb-4">
        <h2 className="text-xl font-semibold border-b pb-4">{t("cart.summary")}</h2>
        <div className="flex justify-between mt-2">
          <span>{t("cart.items")}:</span><span>{Quantity}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>{t("cart.subtotal")}:</span><span>DH{isNaN(Total) ? 0 : Total}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>{t("cart.shipping")}:</span><span>{t("cart.free")}</span>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <span>{t("cart.totalCost")}:</span><span>DH{isNaN(Total) ? 0 : Total}</span>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">{t("cart.customerDetails")}</h3>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder={t("cart.fullName")} className="w-full border p-3 rounded mb-2"/>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder={t("cart.city")} className="w-full border p-3 rounded mb-2"/>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder={t("cart.phone")} className="w-full border p-3 rounded"/>
        </div>

        <button onClick={handleOrder} className="w-full bg-green-500 text-white py-3 mt-4 rounded text-lg hover:bg-green-600 transition">
          {t("cart.orderNow")}
        </button>
      </div>
    </div>
  );
};

export default Cart;
