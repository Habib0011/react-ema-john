import React from 'react';
import './Reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id,name,img,price,quantity} = product
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
              <p className='p-name'>{name}</p>
              <p>Price:<span className='orange-text'> ${price}</span></p>
              <p>Order quantity: <span className='orange-text'>{quantity}</span></p>
           </div>
           <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
           <FontAwesomeIcon icon={faTrashAlt} className='trash' />
           </button>
        </div>
    );
};

export default ReviewItem;