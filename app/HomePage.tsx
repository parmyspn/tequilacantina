import React from "react";
import TitleFigure from "./TitleFigure";
import BackgroundPhoto from "./BackgroundPhoto";
import AboutUs from "./AboutUs";

function HomePage() {
  return (
    <div>
      <TitleFigure />
      <BackgroundPhoto />
      <AboutUs />
      <div className="info-item">
        <div className="card-info">
          <h1 className="text-2xl font-bold">Hours and Location</h1>
          <p>1933 Lonsdale Avenue, North Vancouver, V7M 2K3</p>
          <div className="hours">
            <p>Monday - Thursday: 11 AM - 10 PM</p>
            <p>Friday: 11 AM - 11 PM</p>
            <p>Sunday: 11 AM - 9 PM</p>
          </div>
          <p className="phone">Phone: 604-770-4433</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
