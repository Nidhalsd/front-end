import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { LoginUser } from '../redux/slices/userSlice';



const Login = () => {
    const {isAuth} = useSelector((state)=> state.user )
    const navigate = useNavigate()
    useEffect(()=> {
     if(isAuth){
      navigate("/home")
     }
    },[isAuth])
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data)=> 
    {  dispatch(LoginUser(data));}
      console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email " {...register("email", {required: true})} />
      <input type="password" placeholder="Password" {...register("password", {required: true, })} />

      <input type="submit" />
    </form>
    </div>
  )
}

export default Login
