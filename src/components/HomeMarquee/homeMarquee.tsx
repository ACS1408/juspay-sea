"use client";
import React from "react";
import Container from "../Container";
import useHomeMarquee from "./useHomeMarquee";
import style from "./homeMarquee.module.scss";
import Image from "next/image";

const logos = [
  "/images/marquee-brands/flipkart.svg",
  "/images/marquee-brands/walmart.svg",
  "/images/marquee-brands/amazon.svg",
  "/images/marquee-brands/google.svg",
  "/images/marquee-brands/microsoft.svg",
  "/images/marquee-brands/oneplus.svg",
  "/images/marquee-brands/indigo.svg",
  "/images/marquee-brands/mcdonalds.svg",
  "/images/marquee-brands/burgerking.svg",
  "/images/marquee-brands/xiomi.svg",
];

const HomeMarquee = () => {
  const { marqueeRef } = useHomeMarquee();
  return (
    <section className={`home-marquee ${twClasses.home_marquee}`}>
      <Container>
        <div
          className={`marquee-container ${twClasses.marquee_container} ${style.marquee_container}`}
        >
          <div className={`marquee ${twClasses.marquee}`} ref={marqueeRef}>
            {logos.concat(logos).map((logo, index) => (
              <Image
                src={logo}
                alt={`Logo ${index}`}
                key={index}
                width={173}
                height={64}
                className={`marquee-image ${twClasses.marquee_image}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeMarquee;

const twClasses = {
  home_marquee: "text-white py-10",
  marquee_container: "w-full overflow-hidden flex items-center relative",
  marquee: "flex justify-around items-center",
  marquee_image: "max-h-[100px] mx-11 inline-block",
};
