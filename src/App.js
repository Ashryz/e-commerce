import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.css';
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Favourites } from "./pages/Favourites";
import { Cart } from "./pages/Cart";
import { Search } from "./pages/Search";
import { useSelector } from "react-redux";
import ProductDetails from "./Components/ProductDetails";

import background from './light-patten.ed706aff39a009de4e80.svg'









function App() {
  const theme = useSelector((state) => state.combineTheme.theme)

  if (theme === "Light") {
    document.querySelector("body").classList.add("bg_light");
    document.querySelector("body").classList.remove("bg_dark");
  } else {
    document.querySelector("body").classList.add("bg_dark");
    document.querySelector("body").classList.remove("bg_light");
  }




  return (
    <div className={theme === "Light" ? "App light bg_light " : "App dark bg_dark  "} style={{ minWidth: "455px",backgroundImage:`url(${background})`, backgroundSize: '40%' }}>
     

     
      <BrowserRouter>
        <NavBar />
        <Outlet />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
