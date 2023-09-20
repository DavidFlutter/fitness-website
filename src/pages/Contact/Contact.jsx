import React from 'react'
import "./Contact.css";
import TopHeader from '../../components/TopHeader';
import headerImage from "../../images/header_bg_2.jpg";
import {AiOutlineMessage, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";

const Contact = () => {
  return (
    <div className='Contact'>
        <TopHeader title={"Get in Touch"} image={headerImage}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi quas consequuntur qui, adipisci optio dolore at perferendis vitae minus?
        </TopHeader>
        <div className="contacts">
          <div className="card">
            {<AiOutlineWhatsApp></AiOutlineWhatsApp>}
          </div>
          <div className="card">
            {<AiOutlineInstagram></AiOutlineInstagram>}
          </div>
          <div className="card">
            {<AiOutlineMessage></AiOutlineMessage>}
          </div>
        </div>
    </div>
  )
}

export default Contact