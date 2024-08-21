import React from "react";
import Container from "../Container";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className={`home-banner ${twClasses.home_banner}`}>
      <Container>
        <h1 className="home-banner__title">
          <span
            className={`home-banner__title--normal ${twClasses.title.normal}`}
          >
            Payments designed for
          </span>
          <span
            className={`home-banner__title--highlight ${twClasses.title.highlighted}`}
          >
            GLOBAL OUTCOMES
          </span>
        </h1>
        <p className={`home-banner__description ${twClasses.description}`}>
          <span className="home-banner__description--highlight text-white">
            Juspay
          </span>{" "}
          powers leading enterprises around the world, simplifying go-to-market,
          build better experiences, and never worry about regulatory nuances.
        </p>
        <div className="text-center mt-[4%]">
          <Link href={`/`} className="btn-gradient-outline inline-block">
            <span className="z-[2] relative">Schedule a demo</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;

const twClasses = {
  home_banner: "h-[calc(100svh_-_127.68px)] flex items-center",
  title: {
    normal:
      "text-grey text-[6vmax] leading-[1.2] block text-center tracking-tight font-semibold",
    highlighted:
      "text-clip-primary text-[6vmax] leading-[1.2] block text-center tracking-tight font-semibold",
  },
  description:
    "text-grey-900 text-base font-regular leading-normal max-w-[435px] mx-auto text-center mt-[3%]",
};
