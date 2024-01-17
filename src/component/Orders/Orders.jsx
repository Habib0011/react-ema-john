import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../utilities/fakeDb';

const Orders = () => {
    const Savedcart = useLoaderData();
    const [cart,setCart] = useState(Savedcart)

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(pd => pd.id!==id)
        setCart(remaining) 
       removeFromDb(id)
       console.log(id)
    }
    console.log(Savedcart)
    return (
        <div className='shop-container'>
            <div className='review-contianer'>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveFromCart = {handleRemoveFromCart}
                ></ReviewItem>)
            }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;