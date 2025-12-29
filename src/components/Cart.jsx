import React, { useContext } from "react";
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

  return (
    <div className="max-w-7xl mx-auto px-6 mt-26 flex flex-col lg:flex-row gap-8">
      {/*left section*/}
      <div className="lg:2/3 bg-white p-6">
        {/* Header  */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-semibold">Shop Cart</h1>
          <h1 className="text-lg">Items: ({Quantity})</h1>
          <FiTrash2 onClick={clearCart} className="text-red-500 text-2xl cursor-pointer " />
        </div>

        {/* souHeader  */}
        <div className="grid grid-cols-4 text-grayy-700 font-semibold mt-6 pb-2 border-b">
          <span>Food</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        {/*  cart items */}
        <div>
          {Cart.length > 0 ? (
            Cart.map((item) => {
              const { id, image, name, price, amount } = item;
              return (
                <div key={id} className="grid grid-cols-4 items-center py-4 border-b text-gray-700">
                  <div className="flex items-center space-x-4">
                    <img src={image} alt={name} className="w-16 h-16 rounded-md object-cover" />
                    <div>
                      <h3 className="font-semibold">{name}</h3>
                      <button onClick={() => removeFromCart(id)} className="text-red-500 text-sm flex items-center gap-1 mt-2">
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button onClick={() => decreasequantity(id)} className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                      <IoMdRemove />
                    </button>
                    <span className="text-lg">{amount}</span>
                    <button onClick={() => increasequantity(id)}  className="w-8 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                      <IoMdAdd />
                    </button>
                  </div >

                  <p className="text-lg font-medium">${price}</p>
                  <p className="text-lg font-semibold">${price * amount}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 mt-4">Your Cart is Empty</p>
          )}
        </div>
      </div>

      {/*right section*/}
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
          <span className="text-gray-700">Shinping </span>
          <span className="font-medium">free</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-gray-700">Total Cost</span>
          <span className="font-medium">${isNaN(Total) ? 0 : Total}</span>
        </div>

        <button className="w-full bg-green-500 text-white py-3 mt-4 rounded text-lg">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
