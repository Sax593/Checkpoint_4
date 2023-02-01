import Home from "@pages/Home/Home";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Shop from "@pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
