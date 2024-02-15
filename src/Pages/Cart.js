import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice'

const Cart = () => {
   const products=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  console.log("products",products)

  const handleRemove=(productid)=>{
    dispatch(remove(productid));
  }
  return (
    <div>
     < h2> cart</h2>
     <div>
     
        <div className='cartWrapper'>
          {products.map(product=>(
            <div className='cartCard' key={product.id}>
              <img src={product.image} alt='cant load'/>
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <button className='btn' onClick={()=>handleRemove(product.id)}> remove</button>
            </div>
          ))}

        </div>
      
       
   

     </div>
    </div>
  )
}

export default Cart