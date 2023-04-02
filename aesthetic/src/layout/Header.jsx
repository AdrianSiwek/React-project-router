import React from 'react';
import styles from '../styles/Header.module.css'
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';

const Header = () => {
    return ( 
        <div className={styles.header}>
            <img src={img1} alt="logopedia" className={styles.headerImg} />
        </div>
     );
}
 
export default Header;