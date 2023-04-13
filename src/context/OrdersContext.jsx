import { useContext, createContext, useState } from "react";

const OrdersContext = createContext();
export const useCart = () => useContext(OrdersContext);

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

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

    const updateQuantity = (item, change) => {
        // setCart(
        //   cart.reduce((newCart, cartItem) => {
        //     if (cartItem.name === item.name) {
        //       const newQuantity = cartItem.quantity + change;
        //       if (newQuantity > 0) {
        //         newCart.push({ ...cartItem, quantity: newQuantity });
        //       } else {
        //         newCart.push(cartItem);
        //       }
        //       return newCart;
        //     }
        //   }, [])
        // );

        setCart(
            cart.map(cartItem => {
                if (cartItem.name === item.name) {
                    const newQuantity = cartItem.quantity + change;
                    console.log(newQuantity)
                    if (newQuantity > 0) {
                        cartItem.quantity = newQuantity;
                    } 
                }
                return cartItem;
            })   
        )

    }

    const value = { cart, addItemToCart, updateQuantity };
    return (
        <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
    );
}
