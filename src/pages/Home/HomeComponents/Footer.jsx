import logo from "../../../images/logo.png";
import { socials } from "../../../data";

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={logo} alt="" />
        <div className="socials">
            {socials.map((social, index) => (
                <a key={index} href={social.path} target="blank">
                    <div key={index} className="card">
                        <span className="icon">{social.icon}</span>
                    </div>
                </a>
            ))}
        </div>
        <div className="cp">
            <p> Copyright &copy; DavidExper.com 2027</p>
        </div>
    </div>
  )
}

export default Footer