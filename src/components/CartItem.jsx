import React from 'react'
import { Link } from 'react-router-dom';

const CartItem = ({item}) => {
// Destructuring items
  const {id, title, image, price, amount} = item;  
  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
{/* Image */}
        
        <div>
          <Link to={'/product/${id}'} >
          <img 
            src={image} 
            alt=""
            className='max-w-[80px]'
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem