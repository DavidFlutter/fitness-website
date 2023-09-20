import React from 'react'
import TopHeader from "../../components/TopHeader";
import headerImage from "../../images/header_bg_5.jpg";
import { socials, trainers } from '../../data';
import "./Trainers.css";
import {AiOutlineInstagram, AiFillTwitterCircle, AiOutlineFacebook,AiFillLinkedin} from "react-icons/ai";
 
const Trainers = () => {
  return (
    <div className='Trainers'>
        <TopHeader title={"Meet your Trainers"} image={headerImage}></TopHeader>
        <main>
          {trainers.map(trainer => (
            <div key={trainer.id} className="card">
              <img src={trainer.image} alt="trainer image" />
              <p className="name">{trainer.name}</p>
              <p className="job">{trainer.job}</p>
              <div className="socials">
                <div className="tile">
                  {<AiOutlineInstagram></AiOutlineInstagram>}
                </div>
                <div className="tile">
                  {<AiFillTwitterCircle></AiFillTwitterCircle>}
                </div>
                <div className="tile">
                  {<AiOutlineFacebook></AiOutlineFacebook>}
                </div>
                <div className="tile">
                  {<AiOutlineInstagram></AiOutlineInstagram>}
                </div>
              </div>
            </div>
          ))}
        </main>
    </div>
  )
}

export default Trainers