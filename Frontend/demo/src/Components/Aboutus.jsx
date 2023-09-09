import React from 'react';
import "../CSS/Aboutus.css";
import image1 from '../Images/college1.jpg'
import image2 from '../Images/college.jpg'
import image3 from '../Images/college.jpg'
import image4 from '../Images/college.jpg'
const Aboutus = () => { 

    return (
   <div className="App">    
      <header className="hero">
        <img src={image1} alt="Header Image" />
      </header>

      <section className="education-content">
        <p>Comprehensive web application designed to assist students in making
           informed decisions about their academic and career paths. 
           With a focus on marks and competency mapping, UniGuide offers 
           personalized guidance to help students explore various career options 
           and discover the best-fit educational institutions based on their academic achievements.</p>
      </section>

      <section className="creators">
        <div className="creator">
            <img src={ image1} alt="Creator 1" />
          <p>DEEPAK</p>
        </div>
        <div className="creator">
          <img src={image2} alt="Creator 2" />
          <p>ASHISH</p>
        </div>
        <div className="creator">
          <img src={image3} alt="Creator 3" />
          <p>RUTURAJ</p>
        </div>
        <div className="creator">
          <img src={image4} alt="Creator 4" />
          <p>GAURAV</p>
        </div>
      </section>
    </div>

    )
}

export default Aboutus;