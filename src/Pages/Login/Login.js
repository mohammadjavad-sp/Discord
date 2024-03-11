import { Checkbox, Label, TextInput } from "flowbite-react";
import "./Login.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import discordAnimate from "../../Assets/animations/discord-login.json";
import Lottie from "react-lottie";
const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: discordAnimate,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className="login w-full h-screen sm:flex items-center justify-center hidden">
        <form className="form-login">
          <div className="title-login text-center">
            Welcome <br /> <span>sign in to continue</span>
          </div>
          <div className="w-full justify-center items-center flex flex-col">
            <input
              className="input-login mb-3"
              name="email"
              placeholder="Email"
              type="email"
            />
            <input
              className="input-login"
              name="password"
              placeholder="Password"
              type="password"
            />
            <label
              className=" text-[#0C1AAD] hover:underline mt-2 font-GgBold cursor-pointer"
              htmlFor="input"
            >
              Forget your password?
            </label>
          </div>
          <div className="login-with !h-12">
            <div className="button-log">
              <FaXTwitter size={22} />
            </div>
            <div className="button-log">
              <FaGoogle size={22} />
            </div>
            <div className="button-log">
              <FaFacebookF size={22} />
            </div>
          </div>
          <button type="button" className="button-confirm bg-white">
            Let`s go →
          </button>
          <h5 className="font-GgSemiBold">
            Need an account?{" "}
            <span className="text-[#0C1AAD] font-GgBold cursor-pointer hover:underline">
              Register
            </span>
          </h5>
        </form>
      </section>
      <section className="sm:hidden bg-[#313338] h-screen flex flex-col justify-start items-center pt-10">
        <div className="w-[300px]">
          <Lottie options={defaultOptions} />
        </div>
        <h2 className="text-slate-300 font-GrintoBold h-14 overflow-hidden text-[36px] mt-5">
          Welcome Back
        </h2>
        <form className="flex max-w-md flex-col gap-4 w-[90%] mt-10">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                className="text-slate-300"
                value="Your email"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="sp@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                className="text-slate-300"
                value="Your password"
              />
            </div>
            <TextInput
              className="mb-2"
              id="password1"
              type="password"
              required
            />
            <label className=" text-[#049DEA] font-GgBold" htmlFor="password1">
              Forget your password?
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label className="text-slate-300" htmlFor="remember">
              Remember me
            </Label>
          </div>
          <button
            className="!bg-blue-600 rounded-full text-white font-GgBold py-2"
            type="submit"
          >
            Login
          </button>
          <h5 className="font-GgSemiBold text-slate-300">
            Need an account?{" "}
            <span className="text-[#049DEA] font-GgBold">Register</span>
          </h5>
        </form>
      </section>
    </>
  );
};

export default Login;
