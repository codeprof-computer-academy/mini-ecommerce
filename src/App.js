
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import "./app.css"

export default function App(){
    return(
        <Router>
            <Header/>
            <Routes>
                  <Route path="/" element={<Products/>}/>
                  <Route path="/buy" element={<Buy/>}/>
                  <Route path="/sell" element={<Sell/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/cart" element={<Cart/>}/>
            </Routes>
           
        <Footer/>
        </Router>
    )
}