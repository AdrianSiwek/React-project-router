import React from 'react';
import styles from '../styles/Header.module.css'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';

const Header = () => {
    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * 3)
    // const img = images[index];
    return ( 
        <>
            <Routes>
                <Route path="/strona" exact="true" element={<img src={img1}
                        alt="logopedia"
                        className={styles.headerImg}
                    /> } />
                <Route path="/products" element={<img src={img2}
                        alt="logopedia"
                        className={styles.headerImg}
                    /> }/>
                <Route path="/contact" element={<img src={img3}
                        alt="logopedia"
                        className={styles.headerImg}
                    /> }/>
                <Route path="/admin" element={<img src={img1}
                        alt="logopedia"
                        className={styles.headerImg}
                    /> }/>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {/* <img src={img} alt="" /> */}
        </>
     );
}
 
export default Header;