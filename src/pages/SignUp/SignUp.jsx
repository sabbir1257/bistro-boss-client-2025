import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    {...register("name", { required: true })}
                    className="bg-gray-50 border rounded-lg  block w-full p-2.5"
                    placeholder="name"
                  />
                  {errors.name && (
                    <span className="text-red-700">Name is required</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="name@company.com"
                    className="bg-gray-50 border rounded-lg  block w-full p-2.5"
                  />
                  {errors.email && (
                    <span className="text-red-700">Email is required</span>
                  )}
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
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                    placeholder="••••••••"
                    className="bg-gray-50 border rounded-lg  block w-full p-2.5"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-700">password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-700">
                      Password must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-700">
                      Password must last 20 characters
                    </span>
                  )}
                </div>
                <input
                  type="submit"
                  value="sign Up"
                  className="bg-[#D1A054] p-3 rounded-lg mx-auto grid items-center"
                />
                <p className="text-sm font-light text-[#D1A054]">
                  Already have an account? {" "}
                  <Link
                    to="/login"
                    className="font-semibold text-primary-600 hover:underline "
                  >
                     LogIn
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

export default SignUp;
