import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import ProductSlice from "./slices/ProductSlice"
import PanierSlice from "./slices/panierSlice"
import OrderSlice from "./slices/orderSlice"

export default configureStore ({ reducer:{user:userSlice, products:ProductSlice,panier:PanierSlice,order:OrderSlice}})