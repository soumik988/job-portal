import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const PostJob = () => {
  const { navigate } = useContext(AppContext)
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    description: "",
    location: "",
    salary: "",
    type: "",
    image: null,
    requirements: "",
    benefits: "",
    jobLevel: "",
    education: "",
    experience: "",
  });

  const [preview, setPreview] = useState(null)

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setJobData({ ...jobData, image: selectedFile })
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile)
      setPreview(imageUrl)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("jobsData", jobData)
    navigate('/employer/jobs-list')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='bg-white text-gray-500 max-w-3xl w-full mx-4 md:p-6 p-4 text-left text-sm rounded shadow-[0px_0px_10px_0px] shadow-black/10'
    >
      <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
        Post a New Job
      </h2>

      {preview && (
        <div className='flex mb-3 justify-center'>
          <img
            src={preview}
            alt='Preview'
            className='w-24 h-24 object-cover rounded-full border shadow'
          />
        </div>
      )}

      <div className='mb-4'>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          name='image'
          className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 
            file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold 
            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer'
        />
      </div>

      <label>Job Title</label>
      <input
        type='text'
        name='title'
        value={jobData.title}
        onChange={handleChange}
        placeholder='Enter Job Title'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Company Name</label>
      <input
        type='text'
        name='company'
        value={jobData.company}
        onChange={handleChange}
        placeholder='Enter Company Name'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Job Description</label>
      <textarea
        rows={3}
        name='description'
        value={jobData.description}
        onChange={handleChange}
        placeholder='Describe The Job Role'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Location</label>
      <input
        type='text'
        name='location'
        value={jobData.location}
        onChange={handleChange}
        placeholder='Enter Job Location'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Salary</label>
      <input
        type='text'
        name='salary'
        value={jobData.salary}
        onChange={handleChange}
        placeholder='Enter the Salary'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Job Type</label>
      <select
       type='text'
        name='type'
        value={jobData.type}
        onChange={handleChange}
        placeholder='Full-time, Part-time, Internship, etc.'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      >
        <option value="">Select Type</option>
        <option value="Full time">Full-Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option>
      </select>
       
      

      <label>Requirements</label>
      <textarea
        rows={2}
        name='requirements'
        value={jobData.requirements}
        onChange={handleChange}
        placeholder='List job requirements'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Benefits</label>
      <textarea
        rows={2}
        name='benefits'
        value={jobData.benefits}
        onChange={handleChange}
        placeholder='List job benefits'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Job Level</label>
      <input
        type='text'
        name='jobLevel'
        value={jobData.jobLevel}
        onChange={handleChange}
        placeholder='Entry, Mid, Senior, etc.'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Education</label>
      <input
        type='text'
        name='education'
        value={jobData.education}
        onChange={handleChange}
        placeholder='Required Education'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-4'
      />

      <label>Experience</label>
      <input
        type='text'
        name='experience'
        value={jobData.experience}
        onChange={handleChange}
        placeholder='Years of experience required'
        className='w-full border mt-1 border-gray-500/30 focus:border-indigo-500 
          outline-none rounded py-2.5 px-4 mb-6'
      />

      <button
        type='submit'
        className='w-full bg-indigo-600 hover:bg-indigo-700 text-white 
          font-semibold py-2.5 rounded transition'
      >
        Post Job
      </button>
    </form>
  )
}

export default PostJob
