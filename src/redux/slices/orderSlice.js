import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk("PostOrder ", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.post("/user/createorder", data);
     headers:{
    token:localStorage.getItem("token")
 } 
 return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});

const OrderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    error: null,
    orders:[]
  },
  reducers:{
    logout:{
   
    }
  },
  extraReducers:{
    [createOrder.pending]:(state)=>{state.isLoading=true},
    [createOrder.fulfilled]:(state)=>{
        state.error=null
        state.isLoading=false
    
    },
    [createOrder.rejected]:(state,action)=>{
        state.error=action.payload.error
        
    },
    
  }
});

export default OrderSlice.reducer;
// export const {logout}=UserSlice.actions
