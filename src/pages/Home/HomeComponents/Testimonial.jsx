import { useState } from "react";
import { testimonials } from "../../../data";
import {ImQuotesLeft} from "react-icons/im";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

const Testimonial = () => {
const [index, setIndex] = useState(0);

const back = ()  => {
    if(index > 0){
        setIndex(index - 1);
    }else{
        setIndex(testimonials.length - 1);
    }
}
const next = () =>{
    if(index < testimonials.length - 1){
        setIndex(index + 1);
    }else{
        setIndex(0);
    }
}

  return (
    <div className='Testimonial'>
        <h2> <span>{<ImQuotesLeft></ImQuotesLeft>}</span> Testimonials</h2>
        <div key={testimonials[index].id} className="card">
            <img src={testimonials[index].avatar} alt="avatar" />
            <p className="words">{testimonials[index].quote}</p>
            <span className="name">{testimonials[index].name}</span>
            <span className="job">{testimonials[index].job}</span>
        </div>
        <div className="buttons">
            <button className="prev" onClick={() => back()}>{<IoIosArrowBack></IoIosArrowBack>}</button>
            <button className="next" onClick={() => next()}>{<IoIosArrowForward></IoIosArrowForward>}</button>
        </div>
    </div>
  )
}

export default Testimonial