import React, { useState, useEffect } from "react";
import "./App.css";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

function App() {
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

      <video autoPlay loop muted className="bg-video">
        <source src="/A4op_Exhibition_New.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="overlay">
        <div className="text-wrapper">
          <h1 className="slide-left">All 4 One</h1>
          <h1 className="slide-right">Planner</h1>
        </div>
      </div>
      {/* <div className="slideshow">
        <img src={images[currentImage]} alt="slideshow" />
      </div> */}
    </div>
  );
}

export default App;
