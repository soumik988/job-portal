import React, { useContext } from 'react'
import { jobs } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import JobsCard from './JobsCard'
const Jobs = (job) => {
    const {jobsData}=useContext(AppContext)
    return (
        <div className='py-16'>
            <h1 className='font-semibold text-2xl text-gray-800 md:text-4xl'>
                Featured Jobs
            </h1>
            <div className='my-8 grid  grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center items-center'>
                {
                    jobsData.map((job)=>(
                        <JobsCard key={jobs._id} job={job}/>
                    ))
                }
            </div>
           
        </div>
    )
}

export default Jobs