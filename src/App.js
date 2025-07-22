import React, { useState, useEffect } from "react";
import "./App.css";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

function App() {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollX(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftStyle = {
    transform: `translateY(${-scrollX * 2}px)`,
    opacity: Math.max(1 - scrollX / 500, -5),
  };
  const rightStyle = {
    transform: `translateY(${scrollX * 2}px)`,
    opacity: Math.max(1 - scrollX / 500, 0),
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="logo-container">
        <img src="All 4 one logo_white-01.png" alt="logo" className="logo" />
        <img src="Menu icon-04.png" alt="menu" className="menu-icon" />
      </div>

      <div className="video-holder">
        <video autoPlay loop muted className="bg-video">
          <source src="/A4op_Exhibition_New.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        {/* <div className="overlay"> */}
        <div className="text-wrapper">
          <h1 className="slide-left" style={leftStyle}>
            All <span className="Hollow-text">4</span> One
          </h1>
          <h1 className="slide-right" style={rightStyle}>
            Planner
          </h1>
        </div>
        {/* </div> */}
      </div>

      <div className="slideshow">
        <img src={images[currentImage]} alt="slideshow" />
        <div className="vignette-overlay" />
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
