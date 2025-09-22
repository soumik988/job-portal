import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { Link, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";

const  AdminLayout = () => {

   
   const {navigate,setAdmin}=useContext(AppContext)
  
    const sidebarLinks = [
        { name: "Categories", path: "/admin"},
        { name: "Add category", path: "/admin/add-category" },
        { name: "All Companies", path: "/admin/all-companies" },
        { name: "All Application", path: "/admin/all-application" },
        { name: "All Users", path: "/admin/all-users" },
        { name: "Jobs", path: "/admin/jobs" },
    ];

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link to={"/admin"}>
                <img src={assets.logo}alt="logo"/>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={()=>{
                        setAdmin(false);
                        navigate("/")
                        toast.success("Logout succesfully")
                    }} className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
           <div className="flex">
             <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <a href={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        {item.icon}
                        <p className="md:block hidden text-center">{item.name}</p>
                    </a>
                ))}
            </div>
             <Outlet/>
           </div>
           
        </>
    );
};
export default AdminLayout