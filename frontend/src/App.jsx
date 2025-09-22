import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AllJobs from './pages/AllJobs';
import JobDeatails from './pages/JobDeatails';
import About from './pages/auth/About';
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import { Toaster } from "react-hot-toast"
import MyApplications from './pages/user/MyApplications';
import Profile from './pages/user/Profile';
import EmployerLayout from './pages/employer/EmployerLayout';
import CompanyList from './pages/employer/CompanyList';
import AddCompany from './pages/employer/AddCompany';
import PostJob from './pages/employer/PostJob';
import JobsList from './pages/employer/JobsList';
import Applicants from './pages/employer/Applicants';
import AdminLayout from './pages/admin/AdminLayout';
import CategoryList from './pages/admin/CategoryList';
import AddCategory from './pages/admin/AddCategory';
import AllCompanies from './pages/admin/AllCompanies';
import AllApplications from './pages/admin/AllApplications';
import AllUsers from './pages/admin/AllUsers';
import Jobs from './pages/admin/Jobs';




const App = () => {
  const adminPath = useLocation().pathname.includes("admin")
  const employerPath = useLocation().pathname.includes("employer")
  return (
    <div >
      {adminPath || employerPath ? null : <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/all-jobs' element={<AllJobs />} />
        <Route path='/job-details/:id' element={<JobDeatails />} />
        <Route path='/about' element={<About />} />

        {/*  {..........USER ROUTE..........} */}

        <Route path='/my-application' element={<MyApplications />} />
        <Route path='/profile' element={<Profile />} />

        {/*  {..........EMPLOYER ROUTE..........} */}

        <Route path='/employer' element={<EmployerLayout />}>
          <Route index element={<CompanyList />} />
          <Route path='add-company' element={<AddCompany />} />
          <Route path='post-job' element={<PostJob />} />
          <Route path='jobs-list' element={<JobsList />} />
          <Route path='applicants' element={<Applicants />} />
        </Route>


        {/*  {..........ADMIN ROUTE..........} */}

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<CategoryList />} />
          <Route path='add-category' element={<AddCategory />} />
          <Route path='all-companies' element={<AllCompanies />} />
          <Route path='all-application' element={<AllApplications />} />
          <Route path='all-users' element={<AllUsers />} />
          <Route path='jobs' element={<Jobs />} />
        </Route>


      </Routes>
      {adminPath || employerPath ? null : <Fotter />}

      <Toaster />
    </div>

  );
};

export default App;
