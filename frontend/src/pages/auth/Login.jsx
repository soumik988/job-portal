import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser, setEmployer, setAdmin } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Employer special login
    if (data.email === "employer@gmail.com" && data.password === "123456") {
      setEmployer(true);
      setUser(true);
      navigate("/employer");
      toast.success("Employer login successful");
      return;
    }

    // ✅ Admin special login
    if (data.email === "admin@gmail.com" && data.password === "123456") {
      setAdmin(true);
      setUser(true);
      navigate("/admin");
      toast.success("Admin login successful");
      return;
    }

    // ✅ Normal user login/signup
    if (state === "login") {
      console.log("Logging in with", data);
      setUser(true);
      navigate("/");
      toast.success("User login successful");
    } else {
      console.log("Signing up with", data);
      setUser(true);
      navigate("/");
      toast.success("Signup successful");
    }
  };

  return (
    <div className="flex items-center justify-center mt-15">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[350px] text-center border border-zinc-200 
                 rounded-2xl px-8 bg-zinc-50 shadow-md"
      >
        <h1 className="text-zinc-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Signup"}
        </h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please {state === "login" ? "sign in" : "sign up"} to continue
        </p>

        {/* Signup only: Name */}
        {state !== "login" && (
          <div className="flex items-center w-full mt-4 bg-white border border-zinc-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-zinc-600 placeholder-zinc-400 outline-none text-sm w-full h-full"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-white border border-zinc-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent text-zinc-600 placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full bg-white border border-zinc-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-zinc-600 placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        <p className="text-zinc-500 text-sm mt-3 mb-11">
          {state === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            type="button"
            className="text-indigo-500"
            onClick={() => setState(state === "login" ? "signup" : "login")}
          >
            {state === "login" ? "Signup" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
