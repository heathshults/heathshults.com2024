import React from 'react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

	return(
		<div className="v-center">
		<div className="container-fluid bg-black-semi-transparent bg-blur-clear-semi-transparent">
      <div className="container pt-5">
        
              <div className="row">
                <div className="col-md-12 text-center">
                          <h2 data-aos="fade-up"
                          data-aos-delay="0"
                          data-aos-duration="1000"
                          data-aos-easing="ease"
                          data-aos-once="true">About Me</h2>
                          <div className="space-border"
                            data-aos="fade-up"
                          data-aos-delay="20"
                          data-aos-duration="1000"
                          data-aos-easing="ease"
                          data-aos-once="true"
                            ></div>
                      </div>
                      <div className="col-md-8 text-center m-auto"
                        data-aos="fade-up"
                      data-aos-delay="60"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                        >
                        <p>I am an Interaction Designer and User Interface Engineer. I focus on user experience first 
                          and then engineer and develop the user interface to match the interactive experience. 
                        </p>
                        <p>I am also a experienced musician and audio engineer. I have been playing guitar for over 30 
                          years and have been recording and mixing music for over 20 years. 
                       </p>
                      </div>
              </div>
              <div className="row">
                <div className="col-lg-3 p-5 text-center"
                  data-aos="fade"
                      data-aos-delay="300"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                  >
                      <CircularProgressbar value={98} text={`${98}.0%`} />
                      <h4 className="mt-2">HTML</h4>
                  </div>
                  <div className="col-lg-3 p-5 text-center"
                    data-aos="fade"
                      data-aos-delay="400"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                       <CircularProgressbar value={98} text={`${98}.0%`} />
                      <h4 className="mt-2">SCSS/CSS</h4>
                  </div>
                  <div className="col-lg-3 p-5 text-center"
                    data-aos="fade"
                      data-aos-delay="500"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                       <CircularProgressbar value={80} text={`${80}.0%`} />
                      <h4 className="mt-2">PHP</h4>
                  </div>
                  <div className="col-lg-3 p-5 text-center"
                    data-aos="fade"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                       <CircularProgressbar value={95} text={`${95}.0%`} />
                      <h4 className="mt-2">Javascript</h4>
                  </div>
              </div>
      </div>

		</div>
		</div>
    );
}

export default About;
