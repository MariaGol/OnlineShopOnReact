import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import FullPizza from "./pages/FullPizza";
import Basket from "./pages/Basket";
import ModalContent from "./pages/ModalContent";
import Login from "./pages/Login";
import Enter from "./pages/Enter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/modal" element={<ModalContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enter" element={<Enter />} />
      </Routes>
    </div>
  );
}

export default App;
