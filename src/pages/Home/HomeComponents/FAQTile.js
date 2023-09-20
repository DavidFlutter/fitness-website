import {BiPlus, BiMinus} from "react-icons/bi";
import { useState } from "react";

const FAQTile = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div key={faq.id} className="card">
        <div className="upper">
            <h3 className="question">{faq.question}</h3>
            <button className="toogle-btn" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? <BiMinus></BiMinus> : <BiPlus></BiPlus>}</button>
        </div>
        {isOpen && <p className="answer">{faq.answer}</p>}
    </div>
  )
}

export default FAQTile