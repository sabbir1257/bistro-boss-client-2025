import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000",
});


const useAxiosSecure = () => {
  // request onterceptor to add authorization header for every secure all to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, (error) => {
    const status= error.response.status;
    console.log('status error in the interceptor', status );
    return Promise.reject(error);
  });

  return axiosSecure;
};

export default useAxiosSecure;
