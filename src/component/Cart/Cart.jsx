import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    // const cart = props.cart
    // const {cart} = props
    let total = 0;
    let totalShipping = 0;
    let quantity =0
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1
        }
        // product.quantity = product.quantity || 1
        total = total + product.price*product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = total / 100 * 7;
    const taxFloat = parseFloat(tax).toFixed(2)

    const grandTotal = total + totalShipping + tax


    return (
        <div className='cart'>
                 <h4>Order summary</h4>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${taxFloat}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            
        </div>
    );
};

export default Cart;