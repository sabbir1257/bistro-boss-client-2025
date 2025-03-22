import axios from "axios";

export const axiosSecure = axios.create({
    baseURL:'http://localhost:8000/carts'
})

const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;