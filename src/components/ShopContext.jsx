import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FoodData } from "../assets/img/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [Foods, setFoods] = useState(FoodData);
  const [Cart, setCart] = useState([]);
  const [Quantity, setQuantity] = useState(0);
  const [Total, setTotal] = useState(0);

  // Calcul du total prix
  useEffect(() => {
    const total = Cart.reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      return acc + price * item.amount;
    }, 0);
    setTotal(total);
  }, [Cart]);

  // Calcul de la quantité totale
  useEffect(() => {
    const amount = Cart.reduce((acc, item) => acc + item.amount, 0);
    setQuantity(amount);
  }, [Cart]);

  // Ajouter un produit au panier
  const addCart = (Food, id) => {
    const cartItem = Cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = Cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      const newItem = { ...Food, amount: 1 };
      setCart([...Cart, newItem]);
    }

    toast.success("Food Added To Cart");
  };

  // Supprimer tout le panier
  const clearCart = () => {
  setCart([]);
  setQuantity(0);
  setTotal(0);    toast.success("Cart Emptied");
  };

  // Supprimer un article spécifique
  const removeFromCart = (id) => {
    const newCart = Cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast.success("Food Removed Successfully");
  };

  // Augmenter quantité
  const increasequantity = (id) => {
    const cartItem = Cart.find((item) => item.id === id);
    if (cartItem) {
      addCart(cartItem, id);
    }
  };

  // Diminuer quantité
  const decreasequantity = (id) => {
    const cartItem = Cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = Cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
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
