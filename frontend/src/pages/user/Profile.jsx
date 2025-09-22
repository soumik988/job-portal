import React, { useState } from 'react'

const Profile = () => {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
    experience: "",
    skills: "",
    about: "",
    profileImage: null,
    resume: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFromData({ ...fromData, [name]: files[0] });
      if (name === "profileImage") {
        setPreview(URL.createObjectURL(files[0])); // show image preview
      }
    } else {
      setFromData({ ...fromData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    alert("Profile submitted!");
  };

  return (
    <div className='max-w-3xl mx-auto mt-8 p-6 bg-white shadow rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>My Profile</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          {preview && (
            <img
              src={preview}
              alt='preview'
              className='w-24 h-24 object-cover rounded-full mb-4'
            />
          )}
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Profile Image</label>
          <input type='file' name='profileImage' onChange={handleChange} />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Full Name</label>
          <input
            type='text'
            name='name'
            value={fromData.name}
            onChange={handleChange}
            className='w-full border rounded p-2'
            required
          />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Email</label>
          <input
            type='email'
            name='email'
            value={fromData.email}
            onChange={handleChange}
            className='w-full border rounded p-2'
            readOnly
          />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Phone Number</label>
          <input
            type='text'
            name='phone'
            value={fromData.phone}
            onChange={handleChange}
            className='w-full border rounded p-2'
            required
          />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Location</label>
          <input
            type='text'
            name='location'
            value={fromData.location}
            onChange={handleChange}
            className='w-full border rounded p-2'
            required
          />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Education</label>
          <input
            type='text'
            name='education'
            value={fromData.education}
            onChange={handleChange}
            className='w-full border rounded p-2'
            required
          />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Experience</label>
          <input
            type='text'
            name='experience'
            value={fromData.experience}
            onChange={handleChange}
            className='w-full border rounded p-2'
            required
          />
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Skills</label>
          <textarea
            name='skills'
            value={fromData.skills}
            onChange={handleChange}
            className='w-full border rounded p-2'
            rows='2'
            placeholder='React, Node.js, MongoDB'
            required
          ></textarea>
        </div>
        <div>
          <label className='block mb-1 font-semibold'>About Me</label>
          <textarea
            name='about'
            value={fromData.about}
            onChange={handleChange}
            className='w-full border rounded p-2'
            rows='3'
            placeholder='Tell us something about yourself...'
            required
          ></textarea>
        </div>
        <div>
          <label className='block mb-1 font-semibold'>Resume (PDF/DOC)</label>
          <input type='file' name='resume' onChange={handleChange} />
        </div>

        {/* ✅ Submit button added */}
        <div>
          <button
            type='submit'
            className='bg-primary text-white font-semibold py-2 px-6 rounded-lg shadow-md transition'
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile;
