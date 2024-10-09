import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk("Products", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.get("/user/getproducts", data);
  return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: null,
    products:[]
  },
  reducers:{
    logout:{
   
    }
  },
  extraReducers:{
    [GetProducts.pending]:(state)=>{state.isLoading=true},
    [GetProducts.fulfilled]:(state,action)=>{
        state.error=null
        state.products=action.payload.products
        state.isLoading=false
    
    },
    [GetProducts.rejected]:(state,action)=>{
        state.error=action.payload.error
        
    },
    
  }
});

export default ProductSlice.reducer;
// export const {logout}=UserSlice.actions
