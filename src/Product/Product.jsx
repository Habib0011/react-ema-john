import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,price,ratings} = props.product
    // console.log(props)
   const  handleAddToCart = props.handleAddToCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
            <button  onClick={()=> handleAddToCart(props.product)}  className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />npm i
            </button>
        </div>
    );
};

export default Product;