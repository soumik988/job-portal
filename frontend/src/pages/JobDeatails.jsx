import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import toast from 'react-hot-toast';

const JobDeatails = () => {
  const { jobsData ,isJobApplied,setIsJobApplied,savedJobs,saveJob} = useContext(AppContext);
  const { id } = useParams();
  const job = jobsData.find((job) => job._id == id);

  if (!job) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-red-500">Job not found</h1>
      </div>
    );
  }

  return (
    <div className='py-16'>
      <h1 className="text-2xl md:text-5xl text-gray-800 font-semibold">Job Details</h1>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-10'>
        {/*  {left section} */}
        <div className='flex flex-col'>
          <div className='flex items-center gap-5'>
            <img src={job.image} alt='' className='w-[86px] h-[86px]' />
            <div>
              <h2 className='text-lg md:text-2xl font-semibold'>{job.title}</h2>
              <p className='text-xs sm:text-base'>
                at {job.company}{" "}
                <span className='bg-green-200/40 p-1 rounded ml-2'>
                  {job.type}
                </span>
              </p>
            </div>
          </div>

          {/*    {job description} */}
          <div className='my-2 flex flex-col gap-4 '>
            <h4 className='text-lg font-semibold text-gray-800'>Job Description</h4>
            <p>{job.description}</p>
          </div>

          {/*  {job requirements} */}
          <div className='my-1 flex flex-col gap-4'>
            <h4 className='text-lg font-semibold text-gray-800'>Job Requirements</h4>
            <ul className='list-disc'>
              {
                job.requirements.map((item, index) => (
                  <li key={index} className='text-gray-700 '>{item}</li>
                ))
              }
            </ul>
          </div>
          {/*   {job benifiets} */}

          <div>
            <h4 className='text-lg font-semibold text-gray-800'>Job Benefits</h4>
            <ul className='list-disc'>
              {
                job.benefits.map((item, index) => (
                  <li key={index} className='text-gray-700 '>{item}</li>
                ))
              }
            </ul>

          </div>
        </div>

        {/*  {Right section} */}
        <div className='flex flex-col '>
          <div className='flex gap-4'>
            <div onClick={()=>saveJob(job)}>
              <img 
              
              src={assets.save_later_icon} alt='' className='cursor-pointer ' />
            </div>
            <button
            onClick={()=>{
              setIsJobApplied(!isJobApplied)
              toast.success("Job Applied Successfully")
            }}
            disabled={isJobApplied} className={`cursor-pointer px-10 py-1 bg-primary transition text-gray-800 rounded-full ` }>
              {isJobApplied ?"Applied" :"Apply Now"}

            </button>


          </div>
          {/*  {job salary} */}
          <div className='my-5 flex flex-wrap gap-3 border border-gray-300 p-4'>
            <p className='text-base text-gray-800 font-medium'>Salary :{job.salary}</p>
            <div className='flex items-center gap-4'>
              <p className='text-base text-gray-800 font-medium'>Job Location :</p>
              <p>{job.location}</p>
            </div>
          </div>

          {/*  {job overview}  */}

          <div className='my-1 flex flex-col gap-3 border border-gray-300 ' >
          <p className='text-xl text-gray-800 font-bold '> Job Overview</p>
          <div className='flex flex-wrap items-center gap-2 '>
            <p>Posted Date :{job.postedDate}</p>
            <p>Job Level : {job.jobLevel}</p>
            <p>Education : {job.education}</p>
            <p>Experience :{job.experience}</p>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default JobDeatails
