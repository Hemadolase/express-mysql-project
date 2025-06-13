// src/App.jsx
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Home from "./Home"
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
