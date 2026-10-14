import React from 'react'
import HeroSection from '../HeroSection'
import SearchParams from '../SearchParams'
import FormValidation from '../FormValidation'
import { EmailJS } from '../Emailjs'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <SearchParams/>
        <FormValidation/>
        <EmailJS/>
        <h1>Hello world</h1>
    </>
  )
}

export default Home
