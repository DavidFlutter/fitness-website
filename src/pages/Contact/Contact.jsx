import React from 'react'
import "./Contact.css";
import TopHeader from '../../components/TopHeader';
import {AiOutlineMessage, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";

const Contact = () => {
  return (
    <div className='Contact'>
        <TopHeader title={"Get in Touch"} image={require("../../images/imageUrls")[`header_bg_2`]}>
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