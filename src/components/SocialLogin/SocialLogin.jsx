import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../HOOKS/useAuth";

const SocialLogin = () => {
  const { googleSingIn } = useAuth();

  const handleGoogleSingIn = () => {
googleSingIn()
.then(result => {
    console.log(result.user);
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
