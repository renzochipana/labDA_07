import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { Products } from './pages/Products';
import { FeaturedProducts } from './pages/FeaturedProducts';
import { NewProducts } from './pages/NewProducts';
import { Users } from './pages/Users';
import { Userdetails } from './pages/UserDetails';
import { Admin } from './pages/Admin';

export default function MiApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="products" element={<Products />}>
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Userdetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MiApp />
  </React.StrictMode>
);
