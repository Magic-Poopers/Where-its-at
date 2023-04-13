import './App.css';
import { Start } from "./pages/Start";
import AllEvents from "./pages/AllEvents";
import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Orders from "./pages/Orders";
import AllTickets from "./pages/AllTickets";
import Pagination from "./components/Pagination";
import { CartProvider } from "./context/OrdersContext";

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/events" element={<AllEvents />}></Route>
          <Route path="/addtocart" element={<Event />}></Route>
          <Route path="/sendorder" element={<Orders />}></Route>
          <Route path="/tickets" element={<AllTickets />}></Route>
        </Routes>
        <Pagination />
      </div>
    </CartProvider>
  );
}

export default App;
