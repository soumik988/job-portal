import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { navigate, setQuery,user,setUser } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input);
      navigate("/all-jobs");
      setOpen(false); // optional → closes mobile menu after search
      setInput(" ")
    }
  };

  const logout=()=>{
    setUser(false)
    navigate("/")
    toast.success("logout sucessfully")
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

      {/* Logo / Brand */}
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/all-jobs">Jobs</Link>
        <Link to="/about">About</Link>

        {/* Desktop Search Box */}
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search jobs"
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Login Button */}
        {user?(
          <div className='relative inline-block'
          onMouseEnter={()=>setIsOpen(true)}
          onMouseLeave={()=>setIsOpen(false)}
          >
            <img src={assets.user_profile} alt='' className='w-12 h-12 rounded-full cursor-pointer border-gray-300'/>

            {isopen &&(
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50'>
                <p className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={()=>navigate("/my-application")}>
                  My Application</p>
                <p className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={()=>navigate("/profile")}>
                  Profile</p>
                <p className='px-4 py-2 text-red-500 cursor-pointer' onClick={logout}>
                  Logout</p>
              </div>
            )}

          </div>
        ):<button onClick={() => navigate("/login")} className="cursor-pointer px-8 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-full">
          Login
        </button>}
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        {open ? <X size={28} color="#426287" /> : <Menu size={28} color="#426287" />}
      </button>

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-4 px-5 text-sm md:hidden`}>
        <Link to="/">Home</Link>
        <Link to="/all-jobs">Jobs</Link>
        <Link to="/about">About</Link>

        {/* Mobile Search Box */}
        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full w-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search jobs"
          />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Login Button */}
        <button onClick={() => navigate("/login")} className="cursor-pointer px-6 py-2 mt-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
