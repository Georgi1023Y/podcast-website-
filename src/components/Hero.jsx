import React from "react";

const Hero = () => {
  return (
    <header className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl lg:text-5xl font-bold text-center">
            Добре дошли в топкаста на Божидар Сираков
          </h1>
          <p className="py-6">
            Истории, прозорливост и разговори, които вдъхновяват.
          </p>
          <a href="#episodes" className="btn btn-primary">
            Започни да гледаш
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
