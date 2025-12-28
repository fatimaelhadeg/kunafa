import { createContext, useState, useEffect } from "react";
import {toast} from 'react-toastify';
import { FoodData } from "../assets/img/assets.js";

export const ShopContext = createContext();


const ShopContextProvider = ({ children }) => {
  const [Foods, setFoods] = useState(FoodData);
  const [Cart, setCart] = useState([]);
  const [Quantity, setQuantity] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    const Total = Cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = paraseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    setTotal(Total);
  }, [Cart]);

  useEffect(() => {
    if (Cart) {
      const amout = Cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
    }
    setQuantity;
  }, [Cart]);

  const addCart = (Food, id) => {
    const newsItem = { ...Food, amout: 1 };

    const cartItem = Cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...Cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount };
        } else {
          return item;
        }
      });
      setCart([...Cart,newItem])
      toast.success("Food Added To Cart")
    }
  };

  const clearCart = () => {
    setCart([])
    toast.success("Cart Empty")
  }

  const removeFromCart = () => {
    const newCart = Cart.filter((item)=>{
      return item.id !==id;
    })
    setCart(newCart);
    toast.success("Food Removed Successfulyy")
  }
  const increasequantity = (id) = {
    const cartItem = Cart.find((item)=> item.id === id);
    addCart(cartItem,id)
  }
  const decreasequantity = (id) => {
    const cartItem = Cart.find((item)=>{
      return item.id === id;
    })

    if(cartItem){
      const newCart = Cart.map((item)=>{
        if(item.id === id){
          return {...item,amount:cartItem.amount - 1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }else{
      if(cartItem.amount < 2){
        removeFromCart(id)
      }
    }
  }

  return (
    <ShopContext.Provider value={{ Foods,Cart,addCart,removeFromCart,clearCart,increasequantity,decreasequantity,Total  }}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
