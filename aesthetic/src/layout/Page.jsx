import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Contact from '../pages/ContactPage/ContactPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import ProductsListPage from '../pages/ProductsListPage/ProductsListPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import LoginPage from '../pages/LoginPage/LoginPage';

const Page = () => {
    return ( 
        <Routes>
            <Route path='/strona' element={<HomePage />} />
            <Route path='/products' element={<ProductsListPage />} />
            <Route path='/products/:productId' element={<ProductsPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
     );
}
 
export default Page;