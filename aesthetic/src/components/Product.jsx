import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const { productId, carpenter } = useParams();
    return ( 
        <div>
            Produkty detaliczne
            <p>My product Id: {productId}</p>
            <p>I am: {carpenter}</p>
        </div>
     );
}
 
export default Product;