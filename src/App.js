import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import FullPizza from "./pages/FullPizza";
import Basket from "./pages/Basket";
import ModalContent from "./pages/ModalContent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/modal" element={<ModalContent />} />
      </Routes>
    </div>
  );
}

export default App;
