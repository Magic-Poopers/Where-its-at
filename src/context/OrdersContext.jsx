import { useContext, createContext, useState } from "react";

const OrdersContext = createContext();
export const useCart = () => useContext(OrdersContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    const existingItems = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItems) {
      setCart(
        cart.map((cartItem) => cartItem.name === item.name)
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const value = { cart, addItemToCart };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
