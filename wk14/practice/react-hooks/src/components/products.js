import { useLocation } from "react-router";

function Products() {
  const location = useLocation();

  return(
    <>
      <h1>Products</h1>
      <h4>Path name: {location.pathname}</h4>
      <ul>
        {
          // console.log( location.state.product )
          location.state.products.map( ( product ) => {
            return <li key={product.id}>{product.title}</li>
          } )
        }
      </ul>
    </>
  )
}


export default Products;