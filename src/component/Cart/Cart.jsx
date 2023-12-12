import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    // const cart = props.cart
    // const {cart} = props
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = total / 100 * 7;
    const taxFloat = parseFloat(tax).toFixed(2)

    const grandTotal = total + totalShipping + tax


    return (
        <div className='cart'>
                 <h4>Order summary</h4>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${taxFloat}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            
        </div>
    );
};

export default Cart;