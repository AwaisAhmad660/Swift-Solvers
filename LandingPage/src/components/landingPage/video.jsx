import React from 'react';
import videoPreview from "../images/video-preview.png";

const Video = () => {
  return (
    <>
      <section className="video bg-black">
        <div className="container-sm">
          <h2 className="video-heading text-xl text-center">
            See how it works and get started in less than 2 minutes
          </h2>
          <div className="video-content">
            <a href="#">
              <img src={videoPreview} alt="video" className="video-preview" />
            </a>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video