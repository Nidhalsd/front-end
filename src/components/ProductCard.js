import React from 'react'
import {useDispatch} from 'react-redux'
import { addProductPanier } from '../redux/slices/panierSlice'



const ProductCard = ({product}) => {
 const dispatch=useDispatch()
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.poster} alt='image product not found' />
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
    <button onClick={()=>{dispatch(addProductPanier(product))}}>Add to Card</button>
     
    </div>
  )
}

export default ProductCard
