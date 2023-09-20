import React from 'react'
import MainHeader from './HomeComponents/main-header';
import Programs from './HomeComponents/Programs';
import Values from './HomeComponents/Values';
import FAQ from './HomeComponents/FAQ';
import Testimonial from './HomeComponents/Testimonial';
import "./Home.css";

const Home = () => {
  return (
    <div className='Home'>
        <MainHeader></MainHeader>
        <Programs></Programs>
        <Values></Values>
        <FAQ></FAQ>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home