import React from "react";

function BackgroundPhoto() {
  return (
    <div className="background-cover">
      <div className="background-cover-image has-parallax lazyloaded object-scale-down"></div>
      <div className="block-cover__inner-container">
        <p className="has-text-align-center has-large-font-size"></p>
      </div>
    </div>
  );
}

export default BackgroundPhoto;

//      <span aria-hidden="true" className="block-cover__background"></span>
//
