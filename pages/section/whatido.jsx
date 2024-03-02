import React from 'react';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";


function Whatido() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <h2>What I Do</h2>
                    <div className="space-border"></div>
                </div>
            </div>
            <div className="spacer-single"></div>
            <div className="row">
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_genius id-color-2"></i>
                            <div className="text">
                                <h3>Advance Technology</h3>
                                Every day I strive to stay up to date on current technology. I also thrive on helping 
                                you modernize your apps or create a new app with the latest and greatest software 
                                development tools with design thinking.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" 
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_tools id-color-2"></i>
                            <div className="text">
                                <h3>Musician</h3>
                                I write, record and produce music. In the studio I have over 20 years of audio engineering. 
                                I love to collaborate but I&apos;m also a gun for hire. My instruments are guitar, bass, drums
                                and vocals. You can find my on all major streaming platforms.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"
                    data-aos="fade"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                    >
                    <div className="de_3d-box">
                        <div className="d-inner">
                            <i className="icon_camera_alt id-color-2"></i>
                            <div className="text">
                                <h3>Experience</h3>
                                The most important part of software is the user experience. Whether you are a 
                                master coder or you do a little HTML and CSS, if your users love it you are a 
                                winner. I can help your next project to become a winner.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whatido;