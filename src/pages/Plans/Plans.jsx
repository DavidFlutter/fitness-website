import React from 'react'
import "./Plans.css";
import TopHeader from "../../components/TopHeader";
import { plans } from '../../data';

const Plans = () => {
  return (
    <div className='Plans'>
        <TopHeader title={"Our Plans"} image={require("../../images/imageUrls")[`header_bg_4`]}></TopHeader>
        <main>
          {plans.map(plan => (
            <div key={plan.id} className="card">
              <h3>{plan.name}</h3>
              <p className="desc">{plan.desc}</p>
              <p className="price">${plan.price}<span>/month</span> </p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.available ? "" :"disabled"} >{feature.feature}</li>
                ))}
              </ul>
              <button>Get started</button>
            </div>
          ))}
        </main>
    </div>
  )
}

export default Plans