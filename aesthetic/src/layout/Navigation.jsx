import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';


const list = [
    { name: 'Strona Główna', path: '/strona', exact: true},
    { name: 'Produkty', path: '/products' },
    { name: 'Kontakt', path: '/contact' },
    {name: 'Panel Admina', path: '/panel admina'},
]


const Navigation = () => {

    const menu = list.map((item) => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact? item.exact:false}>{item.name}
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