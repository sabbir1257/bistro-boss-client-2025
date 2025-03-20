import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6); // This initializes the captcha with 6 characters.
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false); // Enable the login button if captcha is correct
    } else {
      setDisabled(true); // Keep the login button disabled if captcha is incorrect
    }
  };

  return (
    <>
      <Helmet>
        <title>DIstro Boss | LogIn</title>
      </Helmet>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border rounded-lg  block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border rounded-lg  block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    placeholder="type the text above"
                    className="bg-gray-50 border rounded-lg  block w-full p-2.5"
                    required
                  />
                  <button
                    type="button" // Fix this: It should be type="button", not nClick
                    onClick={handleValidateCaptcha}
                    className="px-3 py-2 text-xs font-medium text-center text-white bg-[#D1A054]rounded-lg bg-[#D1A054] rounded-lg mt-2"
                  >
                    Validate Captcha
                  </button>
                </div>
                <input
                  disabled={disabled}
                  type="submit"
                  value="Login"
                  className="bg-[#D1A054] text-white p-3 rounded-lg mx-auto grid items-center"
                />
                <p className="text-sm font-light text-[#D1A054]">
                  New here?{" "}
                  <Link
                    to="/signUp"
                    className="font-semibold text-primary-600 hover:underline "
                  >
                    Create a New Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
