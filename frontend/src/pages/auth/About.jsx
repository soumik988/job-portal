import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <div>
          <img src={assets.hero_img} alt=''/>
        </div>
        <div>
          <h2 className='text-3xl font-semibold text-gray-800 '>About Our Job Portal

          </h2>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            {" "}
            Our job portal is a smart platform that connects talented job seekers with leading employers. We aim to simplify hiring by offering quick job searches, resume uploads, and direct applications. 
            With user-friendly tools, we help candidates build their careers while enabling companies to find the right talent effortlessly.
          </p>
          <p className='text-gray-600  leading-relaxed'>
            {" "}
            Our job portal connects job seekers and employers on a single platform.
             It simplifies recruitment with easy job search, resume uploads, and direct applications, helping candidates grow careers and companies find top talent.
          </p>
        </div>
      </div>
         <div className='mt-12 bg-gray-100 rounded-xl p-6 shadow-inner'>
              <h3 className='text-2xl text-gray-700 mb-3 font-semibold'>
                Why Choose Us ?
              </h3>
              <p className='text-gray-600 leading-relaxed'>Thousands Of Verified Job Listings
                <br/>
                Easy Application Process
                <br/>
                Pesonalized Job Recommendation
                <br/>
                Secure and TrustWorthy Platfrom
              </p>
         </div>
    </div>
  )
}

export default About