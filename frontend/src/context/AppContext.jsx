import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";
import { jobs } from "../assets/assets";
import toast from "react-hot-toast";
import { applicants } from "../assets/assets";
import { companies } from "../assets/assets";
import axios from "axios"
axios.defaults.withCredentials=true;

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(false);
    const [employer, setEmployer] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [categoriesData,setCategoriesData]=useState([]);
    const [jobsData,setJobData]=useState([]);
    const [query,setQuery]=useState("")
    const [applicantsData,setApplicantsData]=useState([])


    const [isJobApplied,setIsJobApplied]=useState(false);

    const[savedJobs,setSavedJobs]=useState([]);

    const [companyData,setCompanyData]=useState([])
    const fetchCompanies=()=>(
        setCompanyData(companies)
    )
    const fetchApplicants=()=>(
        setApplicantsData(applicants)
    )

    const fetchCategories=()=>{
     setCategoriesData(categories);
    }
    const fetchJobs=()=>{
     setJobData(jobs)
    }

    const saveJob=(job)=>{
        setSavedJobs((prev)=>{
            const exits=prev.find((item)=>item._id==job._id);
            if(exits){
                return prev;
            }else{
                return [...prev,job]
            }
        });
        toast.success("Job saved Suscessfully")
    }

    useEffect(()=>{
        fetchCategories();
    },[]);
    useEffect(()=>{
        fetchJobs();
    },[]);
    useEffect(()=>{
        fetchCompanies();
    },[]);
    useEffect(()=>{
        fetchApplicants();
    },[]);

    const value = { navigate, user, setUser, employer, setEmployer, admin, 
        setAdmin,categoriesData,jobsData,query,setQuery,isJobApplied,setIsJobApplied,savedJobs,setSavedJobs,
        saveJob,companyData,setCompanyData,applicantsData,setApplicantsData,axios};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
