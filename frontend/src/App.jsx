import Home from "@pages/Home/Home";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Shop from "@pages/Shop/Shop";
import Inventory from "@pages/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;
