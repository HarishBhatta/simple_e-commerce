import React, {useContext} from 'react';
import { ProductContext } from '../context/ProductContext';

const Home = () => {
  //get products from product context
  const {products} = useContext(ProductContext);
  // console.log(products);
  const filterProducts = products.filter((item)=> {
    return (
     item.category ==="men's clothing" || item.category==="women's clothing"
    );
  });
  console.log(filterProducts);
  return (
    <div>Home</div>
  )
}

export default Home