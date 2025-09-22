import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import JobsCard from '../components/JobsCard';

const AllJobs = () => {
  const { jobsData, query } = useContext(AppContext);

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="font-semibold text-xl text-gray-800 md:text-4xl mt-10">
        Available Jobs
      </h1>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center items-center">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobsCard key={job._id} job={job} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No jobs found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
