import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Signup = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const { axios } = useContext(AppContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: null,
  });

  // Handle input change
  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setData({ ...data, image: selectedFile });
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayload = new FormData();
      formPayload.append("name", data.name);
      formPayload.append("email", data.email);
      formPayload.append("password", data.password);
      formPayload.append("role", data.role);
      formPayload.append("image", data.image);

      const { data: res } = await axios.post(
        "http://localhost:4000/user/signup",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.success) {
        toast.success(res.message);
        navigate("/login");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-[350px] text-center border border-zinc-200 
                 rounded-2xl px-8 bg-zinc-50 shadow-md"
      >
        <h1 className="text-zinc-900 text-3xl mt-10 font-medium">Signup</h1>
        <p className="text-zinc-500 text-sm mt-2 pb-6">
          Please sign up to continue
        </p>

        {/* Profile Image Upload */}
        <div className="w-full my-4">
          {preview && (
            <div className="mb-3 flex justify-center">
              <img
                src={preview}
                alt="preview"
                className="w-24 h-24 rounded-full border shadow object-cover"
              />
            </div>
          )}
          <label className="flex items-center justify-center px-4 py-2 bg-indigo-500 text-white text-sm rounded-full cursor-pointer hover:bg-indigo-600 transition">
            Choose Profile Image
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              required
            />
          </label>
          {file && <p className="text-xs text-zinc-500 mt-1">{file.name}</p>}
        </div>

        {/* Name */}
        <div className="flex items-center w-full mt-4 bg-white border border-zinc-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
            viewBox="0 0 24 24"
          >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="7" r="4" />
          </svg>
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

        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-white border border-zinc-200 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
            viewBox="0 0 24 24"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
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

        {/* Role Select */}
        <div className="flex items-center mt-4 w-full bg-white border border-zinc-200 h-12 rounded-full pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
            <path d="M12 14c-4.33 0-8 1.17-8 4v2h16v-2c0-2.83-3.67-4-8-4Z" />
          </svg>
          <select
            name="role"
            value={data.role}
            onChange={onChangeHandler}
            className="bg-transparent text-zinc-600 outline-none text-sm w-full h-full"
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
        >
          Signup
        </button>

        <p className="text-zinc-500 text-sm mt-3 mb-11">
          Already have an account?{" "}
          <button
            type="button"
            className="text-indigo-500"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
