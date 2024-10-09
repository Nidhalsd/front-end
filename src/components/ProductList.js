import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div>
      {products.map((el,index)=> <ProductCard product={el}/>)}
    </div>
  )
}

export default ProductList
