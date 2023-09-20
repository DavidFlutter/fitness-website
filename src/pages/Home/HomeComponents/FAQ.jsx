import {BsQuestionDiamond} from "react-icons/bs";
import { faqs } from "../../../data";
import FAQTile from "./FAQTile";

const FAQ = () => {

  return (
    <div className='FAQ'>
        <h2> <span>{<BsQuestionDiamond></BsQuestionDiamond>}</span> FAQs</h2>
        <div className="faqs">
            {faqs.map(faq => (
                <FAQTile key={faq.id} faq={faq}></FAQTile>
            ))}
        </div>
    </div>
  )
}

export default FAQ