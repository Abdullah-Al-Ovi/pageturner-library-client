import axios from "axios";

const axiosBasic = axios.create({
    baseURL:'https://library-server-sigma.vercel.app',
    withCredentials:true
})

const useAxios = () => {
    return axiosBasic
};

export default useAxios;