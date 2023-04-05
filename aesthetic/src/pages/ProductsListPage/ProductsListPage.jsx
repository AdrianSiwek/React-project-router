import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/ProductsListPage.module.css';

const products = ['książki', 'konsultacje logopedyczne', 'terapia logopedyczna']

const ProductListPage = () => {

    const ListProducts = products.map(product => (
        <li className={styles.listProductsOne} key={product}>
            <Link className={styles.link} to={`/product/&{product}`}>{product}</Link>
        </li>
    ))


    return ( 
        <div className='product'>
            <h2>Lista Produktów</h2>
            <div>
                <ul className={styles.listProducts}>
                    {ListProducts}
                </ul>
            </div>
        </div>
     );
}
 
export default ProductListPage;