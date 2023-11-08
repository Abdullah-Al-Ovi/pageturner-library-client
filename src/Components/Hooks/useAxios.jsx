import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContex } from "../AuthProvider/AuthProvider";


const axiosBasic = axios.create({
    baseURL:'https://library-server-sigma.vercel.app',
    withCredentials:true
})

const useAxios = () => {

    const {logOut} = useContext(authContex)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosBasic.interceptors.response.use(res=>{
            return res; 
         },error=>{
             if(error.response.status === 401 || error.response.status === 403){
                 logOut()
                .then(()=>{
             navigate('/sign-in')
         })
             }
         })
    },[logOut,navigate])

    return axiosBasic
};

export default useAxios;