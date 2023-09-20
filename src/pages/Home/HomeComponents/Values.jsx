import {BiDiamond} from "react-icons/bi";
import img from "../../../images/values.jpg"
import { values } from "../../../data";

const Values = () => {
  return (
    <div className='Values'>
        <div className="body">
            <div className="left-side">
                <img src={img} alt="" />
            </div>
            <div className="right-side">
                <h2> <span>{<BiDiamond></BiDiamond>}</span> Values</h2>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt et possimus nihil a. Officiis velit rem doloremque porro quas illo!
                </p>
                <div className="cards">
                    {values.map((value, index) => (
                        <div className="card" key={value.id}>
                            <span className="icon">{value.icon}</span>
                            <h3>{value.title}</h3>
                            <p className="info">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Values