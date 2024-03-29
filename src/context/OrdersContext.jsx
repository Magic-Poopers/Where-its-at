import { useContext, createContext, useState } from "react";

const OrdersContext = createContext();
export const useCart = () => useContext(OrdersContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const addItemToCart = (item) => {
    const existingItems = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItems) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const copyTickets = () => {
    setPurchasedItems([...purchasedItems, ...cart]);
    clearCart();
  };
  const updateQuantity = (item, change) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.name === item.name) {
          const newQuantity = cartItem.quantity + change;
          return newQuantity > 0
            ? { ...cartItem, quantity: newQuantity }
            : null;
        }
        return cartItem;
      });
      return updatedCart.filter((cartItem) => cartItem !== null);
    });
  };

  const removeItem = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.name !== item.name)
    );
  };

  const value = {
    cart,
    copyTickets,
    purchasedItems,
    addItemToCart,
    updateQuantity,
    removeItem,
    clearCart
  };
  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
}
