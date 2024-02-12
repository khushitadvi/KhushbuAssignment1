import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/editprofile" element={<EditProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
