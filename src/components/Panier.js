import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPanier from './ProductPanier'
import { createOrder } from '../redux/slices/orderSlice'
import ProductList from './ProductList'

const Panier = () => {
    const dispatch=useDispatch()
    const {products} = useSelector(state=>state.panier)
  return (
    <div>
      {
        products.map((el)=> <ProductPanier product={el}/>)
      }
      <button onClick={()=>dispatch(createOrder({ProductList:products}))}>Add All Order</button>
    </div>
  )
}

export default Panier
