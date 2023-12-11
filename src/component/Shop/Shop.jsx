import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../Product/Product';
const Shop = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
          
    },[])
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='products-contianer'>
               {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                ></Product> )
               }
            </div>
            <div className='cart-container'>
                <h2>these are cart summary</h2>

            </div>
            
        </div>
    );
};
export default Shop;