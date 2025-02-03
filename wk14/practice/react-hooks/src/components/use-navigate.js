// import { useState } from "react";
import { useNavigate } from "react-router";


function UseNavigate() {
  const navigate = useNavigate();


  async function handleSubmit( event ) {
    event.preventDefault();

    const response = await fetch( "https://fakestoreapi.com/products" )
    const json = await response.json();

    navigate( "/products", { state: { products: json }} )
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <button>Fetch Products</button>
      </form>
    </>
  )  
}


export default UseNavigate;