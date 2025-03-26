import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../HOOKS/useAuth";
import useAxiosPublic from "../../HOOKS/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingIn } = useAuth();
  const axiosPublic = useAxiosPublic();
const navigate = useNavigate();

  const handleGoogleSingIn = () => {
googleSingIn()
.then(result => {
    console.log(result.user);
    const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
    }
    axiosPublic.post('/users', userInfo)
    .then(res => {
        console.log(res.data);
        navigate('/');
    })
})
  }
  return (
    <div>
      {/* google sing in button */}
      <button onClick={handleGoogleSingIn} className="flex items-center gap-2 px-4 py-2 mx-auto transition-all bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md">
        <FcGoogle size={24} />
        <span className="font-medium text-gray-700">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
