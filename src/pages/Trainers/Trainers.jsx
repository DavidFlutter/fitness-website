import React from 'react'
import TopHeader from "../../components/TopHeader";
import { trainers } from '../../data';
import "./Trainers.css";
import {AiOutlineInstagram, AiFillTwitterCircle, AiOutlineFacebook} from "react-icons/ai";
 
const Trainers = () => {
  return (
    <div className='Trainers'>
        <TopHeader title={"Meet your Trainers"} image={require("../../images/imageUrls")[`header_bg_5`]}></TopHeader>
        <main>
          {trainers.map(trainer => (
            <div key={trainer.id} className="card">
              <img src={trainer.image} alt="trainer" />
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