import React, { useEffect, useState } from "react";
import { add } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { STATUSS } from "../Store/productSlice";
const Products = () => {
  // const API='https://fakestoreapi.com/products'

  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const [products,setproducts]=useState([]);

  // const fectproduct= async(url)=>{
  // try{
  //     const result= await fetch(url);
  //     const data= await result.json();
  //     console.log(data);
  //     setproducts(data);

  // }catch(err){
  //     console.log(err);
  // }
  // }

  useEffect(() => {
    // fectproduct(API)
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status == STATUSS.LOADING) {
    return <h2>LOADING........</h2>;
  }

  if(status == STATUSS.ERROR){
    return <h2>Error to get products... something went wrong

    </h2>
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="ad" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              ADD To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
