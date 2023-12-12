import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products , setProducts] = useState([])
   const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
          
    },[])
    const handleAddToCart = (product) =>{
        // console.log(product)
        const newCart= [...cart, product];
        setCart(newCart)
    }
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='products-contianer'>
               {
                products.map(product => <Product
                key = {product.id}
                product = {product}
                handleAddToCart ={handleAddToCart}
                ></Product> )
               }
            </div>
            <div className='cart-container'>
           <Cart cart ={cart}></Cart>

            </div>
            
        </div>
    );
};
export default Shop;