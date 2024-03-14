import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import Image from 'next/image';

import logoImg from '../../public/img/hs-logo.png';

const Navbar = function () {
  const [showMenu, setMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setMenu(false);
      if (window.pageYOffset > headerRef.current.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);
    return(
      <header ref={headerRef} className={isSticky ? "sticky" : ""} id="header-wrap">
        <nav className="navbar transition">
        <div className="container-fluid">
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            <Image src={logoImg} className="img-fluid d-block imginit" alt="logo"/>
          </Link>
          {/* Desktop menu Here */}
          <div className="dekstopmenu">
             <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="whatido">
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="gallery">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="resume">
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div className="dekstopmenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> 
                <Link className="nav-link transition" activeClass="active" spy to="blog">
                    Sign In
                </Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link transition" activeClass="active" spy to="blog">
                  Dark Mode
                </Link>
              </li>
            </ul>
          </div>
          {/* Desktop menu Here */}

          {/* mobile menu here */}
          {showMenu && 
          <div className="mobilemenu" >
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="hero-area">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClass="active" smooth spy to="about">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="whatido">
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="gallery">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="resume">
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition"smooth activeClass="active" spy to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" smooth activeClass="active" spy to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          }
          <button className="burgermenu" type="button" onClick={() => setMenu(!showMenu)}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {/* mobile menu here */}
        </div>
      </nav>
      </header>
    )
}

export default Navbar;