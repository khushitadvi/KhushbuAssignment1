import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
