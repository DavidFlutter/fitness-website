import React from 'react'

const TopHeader = ({title, image, children}) => {
  return (
    <div className='TopHeader'>
      <img src={image} alt="image" />
      <div className="content">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default TopHeader