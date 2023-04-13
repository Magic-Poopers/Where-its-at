import { useContext, createContext, useState } from 'react';

const OrdersContex = createContext();

function Provider(params) {
    const [cart, setCart] = useState([]);

    return <OrdersContex.Provider value={{ cart, setCart }}>

    </ OrdersContex.Provider >
    
}
