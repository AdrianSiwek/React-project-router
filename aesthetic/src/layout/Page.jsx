import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import News from '../pages/News/News';
import Admin from '../pages/Admin/Admin';

const Page = () => {
    return ( 
        <Routes>
            <Route path='/strona' element={<Home />} />
            <Route path='/products' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
     );
}
 
export default Page;