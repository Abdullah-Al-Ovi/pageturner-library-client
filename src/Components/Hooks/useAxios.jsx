import axios from "axios";

const axiosBasic = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const useAxios = () => {
    return axiosBasic
};

export default useAxios;