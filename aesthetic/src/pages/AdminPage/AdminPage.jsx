import React from 'react';
import {Route, Routes, redirect } from 'react-router-dom';

const permission = true;

const AdminPage = () => {
    return ( 
        <Routes>
            <Route element={() => (
                permission? <h3>Panel admina - Witaj!!</h3> : redirect("/login")
            )} />
        </Routes>
     );
}
 
export default AdminPage;