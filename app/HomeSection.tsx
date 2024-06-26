import React from "react";

function HomeSection() {
  return (
    <div>
      <div className="section-welcome border-b-4 border-black">
        <div className="flex flex-col justify-between h-full">
          <div className="welcome-title-wrapper">
            <h1 className="heading-huge">Welcome to Tequilla Contina</h1>
          </div>
          <div className="grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            <a
              href="#menuTabs"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-l font-semibold">
                Menu{""}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>

            <a
              href=""
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="mb-3 text-l font-semibold">
                Order{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          </div>
        </div>
        <div className="flex justify-end border-l-4 border-black">
          <img
            src={"/welcome-section-img.jpg"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </div>
      </div>
      <div className="section-welcome border-b-4 border-black">
        <div className="hours-location-image border-r-4 border-black">
          <img
            src={"/lets-taco.jpg"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </div>
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
    </div>
  );
}

export default HomeSection;
