import React from "react";
import image from "../assets/bojidar.jpeg";

const About = () => {
  return (
    <section id="about" className="container mx-auto p-6">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
        За мен
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-10">
        Здравей! Аз съм Божидар. Обичам да споделям истории със света. Моят
        подкаст обхваща технологии, философия, предприемачество и дълбоки
        житейски уроци.
      </p>
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={image}
          alt="bojidar"
          className="w-full h-full lg:w-1/5 lg:h-1/5 rounded-full hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default About;
