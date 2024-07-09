import React from "react";

function TitleFigure() {
  return (
    <div className="mt-10">
      <figure className="w-screen flex justify-center block m-auto m-0 border-t-2">
        <a href="/">
          <img
            fetchPriority="high"
            decoding="async"
            width="1024"
            height="215"
            src="/TEQUILA CANTINA (1024 x 215 px).png"
            alt="tequila cantina mexican restaurant website header"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </a>
      </figure>
    </div>
  );
}

export default TitleFigure;

//        srcSet="/wp-content/uploads/2023/02/tequila-cocina-mexican-restaurant-website-logo-header-1024x215.png 1024w, /wp-content/uploads/2023/02/tequila-cocina-mexican-restaurant-website-logo-header-300x63.png 300w, /wp-content/uploads/2023/02/tequila-cocina-mexican-restaurant-website-logo-header-768x161.png 768w, /wp-content/uploads/2023/02/tequila-cocina-mexican-restaurant-website-logo-header.png 1284w"
