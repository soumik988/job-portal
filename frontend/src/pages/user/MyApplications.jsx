import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const MyApplications = () => {
  const { jobsData, navigate } = useContext(AppContext);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approve":
      case "hired":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800"; // fallback for unknown status
    }
  };

  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "full-time":
        return "bg-purple-100 text-purple-800";
      case "part-time":
        return "bg-blue-100 text-blue-800";
      case "contract":
        return "bg-green-100 text-green-800";
      case "internship":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800"; // fallback/default
    }
  };

  return (
    <div className="py-16 px-4 max-w-full mx-auto bg-gradient-to-b from-purple-200/70">
      <h1 className="mb-9 text-2xl md:text-5xl font-medium text-gray-800">
        Applied Jobs
      </h1>
      {!jobsData || jobsData.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">No Job Applied</div>
          <p className="text-gray-400 mt-4">
            Your Job Application Will appear here once Start Applying.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-hidden">
                    Job Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-hidden">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-hidden">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-hidden">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-hidden">
                    Salary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-hidden">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobsData.map((job, index) => (
                  <tr
                    className="hover:bg-gray-50 transition-color hover:cursor-pointer"
                    onClick={() => navigate(`/job-details/${job._id}`)}
                    key={index}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {job.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {job.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(
                          job.type
                        )}`}
                      >
                        {job.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {job.salary}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          job.status || "pending"
                        )}`}
                      >
                        {job.status || "pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
