import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from "./layout/Footer";

import Header from "./layout/Header";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import ContactPage from "./pages/ContactPage";
import DeliveryPage from "./pages/DeliveryPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";



const router = (
    <BrowserRouter>
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/basket' element={<BasketPage/>}/>
                <Route path='/delivery' element={<DeliveryPage/>}/>
                <Route path='/catalog' element={<CatalogPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/catalog/:id' element={<ProductPage/>}/>
            </Routes>
            <Footer />
            
        </div>
    </BrowserRouter>
)

export default router