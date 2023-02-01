import Home from "@pages/Home/Home";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
