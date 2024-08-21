import React from "react";
import Container from "../Container";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className={`home-banner ${twClasses.home_banner}`}>
      <Container>
        <h1 className="home-banner__title">
          <span className="home-banner__title--line text-grey text-[7vmax] leading-tight block text-center tracking-tight font-semibold">
            Payments designed for
          </span>
          <span className="home-banner__title--highlight text-clip-primary text-[7vmax] leading-tight block text-center tracking-tight font-semibold">
            GLOBAL OUTCOMES
          </span>
        </h1>
        <p className="home-banner__description text-grey-900 text-base font-regular leading-normal max-w-[435px] mx-auto text-center mt-[3%]">
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
};
