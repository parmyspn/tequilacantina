import React from "react";

function AboutUs() {
  return (
    <div className="mt-10 border-t-2 font leading-6">
      <h1 className="text-2xl text-center mt-8 font-bold mb-2">
        {" "}
        Welcome to Tequila Cantina{" "}
      </h1>
      <div className="m-5">
        <p className="about-us-paragraph text-justify block leading-8 p-6">
          located at 1933 Lonsdale Street in North Vancouver, where you’ll find
          plenty of parking available for your convenience. <br></br>At Tequila
          Cantina, we offer an authentic Mexican dining experience. Join us
          every Friday for live mariachi music, adding a festive touch to your
          dining. Our diverse menu features traditional Mexican dishes that let
          you truly savor the flavors of Mexico. Our dishes are made using only
          the finest, freshest ingredients. Our recipes are crafted to be both
          healthy and delicious. We do not use preservatives, food coloring, or
          additives in our cooking. Our house salsa and guacamole are made with
          all-natural ingredients, ensuring a fresh and flavorful experience.{" "}
          <br></br>Don't miss our Taco Tuesday, where you can enjoy special
          deals on our delicious tacos. <br></br>
          Tequila Cantina is open every day, making it easy for you to enjoy our
          delectable food and vibrant atmosphere whenever you wish. Come and
          experience the true taste of Mexico at Tequila Cantina, where quality
          and tradition meet.
        </p>
      </div>
      <div className="flex text-center justify-center m-8 space-x-2">
        <a
          href="Menu"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Menu{""}</h2>
        </a>

        <a
          href="https://www.clover.com/online-ordering/tequila-cantina-north-vancouver"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Order </h2>
        </a>
        <a
          href="https://maps.app.goo.gl/bGA38C9cyksXz6u7A"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Map{""}</h2>
        </a>

        <a
          href="https://www.instagram.com/tequilacantinalonsdale"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Instagram</h2>
        </a>
        <a
          href="tel:+12365512243"
          className="group rounded-lg border border-gray px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-l font-semibold">Call{""}</h2>
        </a>
      </div>
      <div className="border-t-2 mb-5"></div>
      <figure className="gallery grid md:grid-cols-3 sm:grid-cols-2">
        <figure className="p-4">
          <img
            src={"/image1.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image2.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image3.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image4.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image5.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
        <figure className="p-4">
          <img
            src={"/image6.png"}
            alt="mexican restaurant"
            className="desktop-image"
          />
        </figure>
      </figure>
    </div>
  );
}

export default AboutUs;
