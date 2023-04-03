import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';


const list = [
    { name: 'Strona Główna', path: '/strona'},
    { name: 'Produkty', path: '/products' },
    { name: 'Kontakt', path: '/contact' },
    {name: 'Panel Admina', path: '/admin'},
]


const Navigation = () => {

    const menu = list.map((item) => (
        <li className={styles.item} key={item.name}>
            <NavLink to={item.path} >{item.name}
            </NavLink>
        </li>
    ))

    return ( 
        <nav className={styles.navi}>
            <ul className={styles.menu}>
               {menu} 
            </ul>
        </nav>
     );
}
 
export default Navigation;