import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Contact from '../pages/ContactPage/ContactPage';
import News from '../pages/News/News';
import AdminPage from '../pages/AdminPage/AdminPage';

const Page = () => {
    return ( 
        <Routes>
            <Route path='/strona' element={<HomePage />} />
            <Route path='/products' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<AdminPage />} />
        </Routes>
     );
}
 
export default Page;