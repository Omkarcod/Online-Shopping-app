import React from 'react'
import Products from '../Component/Products'

const Home = () => {
  return (
    <div>
        <h1 className='heading'>Welcome online shopping store </h1>
        <section>
            <h3 style={{fontWeight:"bolder",fontSize:"30px"}}>Products</h3>
            <Products/>


        </section>
    </div>
  )
}

export default Home