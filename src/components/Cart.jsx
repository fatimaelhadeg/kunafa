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
        <div className="grid grid-cols-4 text-grayy-700 font-semibold ">
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
                <div key={id}>
                  <div>
                    <img src={image} alt={name} />
                    <div>
                      <h3>{name}</h3>
                      <button onClick={() => removeFromCart(id)}>
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </div>

                  <div>
                    <button onClick={() => decreasequantity(id)}>
                      <IoMdRemove />
                    </button>
                    <span>{amount}</span>
                    <button onClick={() => increasequantity(id)}>
                      <IoMdAdd />
                    </button>
                  </div>

                  <p>${price}</p>
                  <p>${price * amount}</p>
                </div>
              );
            })
          ) : (
            <p>Your Cart is Empty</p>
          )}
        </div>
      </div>

      {/*right section*/}
      <div>
        <h2>Cart Summary</h2>

        <div>
          <span>Items:</span>
          <span>{Quantity}</span>
        </div>

        <div>
          <span>Subtotal</span>
          <span>${isNaN(Total) ? 0 : Total}</span>
        </div>

        <div>
          <span>Shinping fee</span>
          <span>free</span>
        </div>

        <div>
          <span>Total Cost</span>
          <span>${isNaN(Total) ? 0 : Total}</span>
        </div>

        <button>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
