import React, { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import PopularVacancies from '../components/PopularVacancies'
import HowWorks from '../components/HowWorks'
import PopularCategories from '../components/PopularCategories'
import Jobs from '../components/Jobs'
import Testimonials from '../components/Testimonials'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const { setQuery } = useContext(AppContext);

  useEffect(() => {
    setQuery(" ");
  }, [setQuery]);

  return (
    <div>
      <Hero />
      <PopularVacancies />
      <HowWorks />
      <PopularCategories />
      <Jobs />
      <Testimonials />
    </div>
  )
}

export default Home
