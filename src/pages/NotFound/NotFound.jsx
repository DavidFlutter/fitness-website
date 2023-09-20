import React from 'react'
import "./NotFound.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='NotFound'>
        <h2> This page does not exits but the <span><Link to={"/"}>Home</Link></span> page does, lets go there instead</h2>
        <p className="smile">{":-)"}</p>
    </div>
  )
}

export default NotFound