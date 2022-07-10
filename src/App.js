import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCart from './Components/AddCart/AddCart';
import ExtraButtons from './Components/ExtraButtons/ExtraButtons';
import Footer from "./Components/Footer/Footer";
import Header from './Components/Header/Header';
import HeaderMain from './Components/Header/HeaderMain';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import Recently from './Components/Recently/Recently';
import Wishlist from './Components/Wishlist/Wishlist';

function App() {
  return (
    <>
      <Header />
      <HeaderMain />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
      <Footer />
      <Wishlist />
      <AddCart />
      <ProductInfo />
      <ExtraButtons />
      <Recently />
    </>
  );
}

export default App;
