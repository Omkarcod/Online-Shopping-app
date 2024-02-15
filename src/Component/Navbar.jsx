import React from 'react'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  // console.log(items,'p0')
  return (
    <div style={{display:"flex" ,alignItems:"center",justifyContent:'space-between', backgroundColor:"skyblue" ,padding:'20px'}}>
        <span className='logo' style={{fontSize:"20px",fontWeight:'bolder'}}>Welcome To Store</span>

        <div >
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='cart'> Cart </Link>
            <span className='cartCounter'> Cart Item: {items.length} </span>
        </div>
       
    </div>
  )
}

export default Navbar