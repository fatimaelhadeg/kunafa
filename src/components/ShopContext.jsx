import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FoodData } from "../assets/img/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [Foods, setFoods] = useState(FoodData);
  const [Cart, setCart] = useState([]);
  const [Quantity, setQuantity] = useState(0);
  const [Total, setTotal] = useState(0);

  // Total price
  useEffect(() => {
    const total = Cart.reduce((acc, item) => {
      const price = parseFloat(item.price);
      if (isNaN(price)) return acc;
      return acc + price * item.amount;
    }, 0);
    setTotal(total);
  }, [Cart]);

  // Total quantity
  useEffect(() => {
    const amount = Cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setQuantity(amount);
  }, [Cart]);

  const addCart = (Food, id) => {
    const cartItem = Cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = Cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(newCart);
    } else {
      const newItem = { ...Food, amount: 1 };
      setCart([...Cart, newItem]);
    }

    toast.success("Food Added To Cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart Empty");
  };

  const removeFromCart = (id) => {
    const newCart = Cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.success("Food Removed Successfully");
  };

  const increasequantity = (id) => {
    const cartItem = Cart.find((item) => item.id === id);
    if (cartItem) {
      addCart(cartItem, id);
    }
  };

  const decreasequantity = (id) => {
    const cartItem = Cart.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = Cart.map((item) =>
          item.id === id
            ? { ...item, amount: item.amount - 1 }
            : item
        );
        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <ShopContext.Provider
      value={{
        Foods,
        Cart,
        addCart,
        removeFromCart,
        clearCart,
        increasequantity,
        decreasequantity,
        Total,
        Quantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
