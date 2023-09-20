import {BiCrown, BiRightArrowAlt} from "react-icons/bi";
import { programs } from "../../../data"; 

const Programs = () => {
  return (
    <div className='Programs'>
        <h2> <span>{<BiCrown></BiCrown>}</span> Programs</h2>
        <div className="programs-list">
            {programs.map((program) => (
                <div className="card" key={program.id}>
                    <span className="icon">{program.icon}</span>
                    <h3>{program.title}</h3>
                    <p className="info">{program.info}</p>
                    <button className="program-btn">
                        Learn More <span>{<BiRightArrowAlt></BiRightArrowAlt>}</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs