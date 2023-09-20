import React from 'react'
import img from "../../../images/main_header.png"
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div className='MainHeader'>
        <div className="left-side">
            <h4>#1000DayWorkOut</h4>
            <p className='big-text'>
                Join The Legends of The Fitness World
            </p>
            <p className='desc-text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum repudiandae eos maiores accusantium, inventore sit molestias impedit animi tempora possimus.
            </p>
            <Link to={"/plans"}>
                <button className='cta-btn'>
                    Get Started
                </button>
            </Link>
        </div>
        <div className="right-side">
            <div className="circle"></div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default MainHeader