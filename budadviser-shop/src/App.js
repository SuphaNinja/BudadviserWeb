import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ShoppingCart } from "./pages/ShoppingCart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
}
