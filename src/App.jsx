import "./App.css";

import AboutCompany from "./components/AboutCompany";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./components/view/Home";
import Product from "./components/view/Product";
import ProductDeatils from "./components/view/ProductDeatils";

function App() {


  return (
    <>
    Header
   <div className="flex gap-5">
     <Link to={'/'}>Home</Link>
    <Link to={'/about'}>about</Link>
    <Link to={'/product'}>Product</Link>

   </div>
      <Routes>
        <Route path="/" element={<> <Home /> </>} />
        <Route path="/about" element={<> <AboutCompany /> </>} />
        <Route path="/product" element={<> <Product /> </>} />
        <Route path="/product/:id" element={<> <ProductDeatils /> </>} />
      </Routes>
      Footer
    </>
  );
}

export default App;