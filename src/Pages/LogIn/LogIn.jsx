import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthGlobally } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/UseHooks";
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const LogIn = () => {
  useTitle("Login")
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInGoogle, signInGithub } = useAuthGlobally();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page", location);
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handelGoogle = () => {
    signInGoogle()
      .then((result) => {
        const google = result.user;
        console.log(google);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handelGithub = () => {
    signInGithub()
      .then((result) => {
        const github = result.user;
        console.log(github);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <main className="w-4/5 mx-auto border shadow rounded-md my-10">
      <div className="flex container mx-auto">
        <div className="bg-warning text-white md:w-1/2 hidden md:flex flex-col justify-center items-center py-10">
          <h2 className="font-bold text-3xl">Welcome Back!</h2>
          <p className="text-base font-normal my-9 w-1/2 text-center">
            To keep connected with us please login with your personal info
          </p>
          <button className="btn bg-transparent text-white px-9">
            SIGN IN
          </button>
        </div>
        <div className="flex justify-center flex-col w-full md:w-1/2 bg-warning shadow">
          <h2 className="font-bold text-3xl text-center pt-5">Log In!</h2>
          <div className=" text-center py-5 px-5 bg-[#f1dfe3] shadow-sm rounded md:w-[500px] mx-auto my-5">
            <form onSubmit={handleLogin}>
              <input
                className="w-[80%] py-2 my-5 rounded outline-none px-4 "
                type="email"
                name="email"
                placeholder="    enter your email"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base "
                  autoComplete="off"
                  placeholder="   enter your password"
                />
                <span className="absolute md:top-3 md:right-14 top-3 right-11">
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <AiFillEye
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </span>
              </div>

              <p className="text-[#B2A4FF] underline mt-5">
                <Link>Forget Password</Link>
              </p>
              <button className="w-[80%]  bg-[#FFB6C6]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center">
                Login{" "}
                <span>
                  <CiLogin className="w-8 h-8 " />
                </span>{" "}
              </button>

              <p className="text-red-600 text-lg">{error}</p>

              <p className="my-5 px-1 md:px-0">
                {" "}
                Create a new account?
                <Link to="/register" className="text-[#B2A4FF] underline">
                  {" "}
                  Registration
                </Link>
              </p>
            </form>
          </div>
          <button
            onClick={handelGoogle}
            className="p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-4  "
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Google</span>
          </button>
          <button
            onClick={handelGithub}
            className="p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-5  "
          >
            <FcGoogle className="text-[32px]" />
            <span>Continue with Github</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
