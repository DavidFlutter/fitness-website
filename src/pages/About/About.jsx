import React from 'react';
import TopHeader from '../../components/TopHeader';
import image1 from "../../images/about1.jpg";
import image2 from "../../images/about2.jpg";
import image3 from "../../images/about3.jpg";

import "./About.css";

const About = () => {
  return (
    <div className='About'>
        <TopHeader title={"About Us"} image={require("../../images/imageUrls")[`header_bg_1`]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, reprehenderit. Non voluptatibus doloribus necessitatibus! Dolorum itaque optio praesentium eum id?
        </TopHeader>
        <main>
          <img src={image1} alt="" />
          <section>
            <h3>Our Misson</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A dolorem debitis quia minus est, ad ea incidunt, expedita doloremque modi quam commodi enim asperiores! Aspernatur voluptatibus quis, deleniti ab nam veniam id deserunt quam earum nobis soluta.</p>
          </section>
          <section>
            <h3>Our Vison</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat pariatur iste ut quibusdam asperiores earum odio aut. Delectus atque vero mollitia sed culpa. Eligendi est dignissimos quos ab quasi?</p>
          </section>
          <img className='switch' src={image2} alt="" />
          <img src={image3} alt="" />
          <section>
            <h3>Our Goal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel sed velit. Architecto, accusamus ab pariatur saepe, repellat earum reprehenderit alias atque deleniti cum sint voluptate adipisci necessitatibus at numquam eligendi possimus ratione nihil vero eaque commodi ad! Earum dignissimos perferendis recusandae quia qui corporis consectetur aliquam rem totam quidem!</p>
          </section>

        </main>
    </div>
  )
}

export default About
