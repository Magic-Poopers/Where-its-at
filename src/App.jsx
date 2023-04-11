import "./App.css";
import EventInfo from "./components/EventInfo";
import Header from "./components/Header";
import { AllEvents } from "./pages/AllEvents";

function App() {
  return <div className="container">
    <AllEvents />
  </div>;
}

export default App;
