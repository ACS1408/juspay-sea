"use client";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import useHomeBanner from "./useHomeBanner";
import MouseTrackCard from "./MouseTrackCard/mouseTrackCard";
import CharacterSlots from "./CharacterSlots";

const HomeBanner = () => {
  const {
    container,
    mouseTrackCard,
    mouseTrackCardInner,
    hoverableElements,
    trackCardData,
    slotLetters,
  } = useHomeBanner();

  return (
    <section className={`home-banner ${twClasses.home_banner}`} ref={container}>
      <Container className={twClasses.container}>
        <Image
          src="/images/grid-markings.svg"
          alt="grid lines"
          width={1189}
          height={653}
          className={`grid-markings ${twClasses.grid_markings}`}
        />
        <div className="z-[2] relative">
          <h1
            className="home-banner__title reveal to-top"
            ref={hoverableElements[0]}
          >
            <span
              className={`home-banner__title--normal ${twClasses.title.normal}`}
            >
              Payments designed for
            </span>
            <CharacterSlots slotLetters={slotLetters} />
            <span
              className={`home-banner__title--highlight ${twClasses.title.highlighted}`}
            >
              GLOBAL OUTCOMES
            </span>
          </h1>
          <p
            className={`home-banner__description reveal to-top ${twClasses.description}`}
            ref={hoverableElements[1]}
          >
            <span className="home-banner__description--highlight text-white">
              Juspay
            </span>{" "}
            powers leading enterprises around the world, simplifying
            go-to-market, build better experiences, and never worry about
            regulatory nuances.
          </p>
          <div
            className={`home-banner__button ${twClasses.button}`}
            ref={hoverableElements[2]}
          >
            <Link
              href={`/`}
              className="btn-gradient-outline inline-block"
              aria-label="Schedule a demo"
            >
              <span className="z-[2] relative">Schedule a demo</span>
            </Link>
          </div>
        </div>
      </Container>
      <MouseTrackCard
        mouseTrackCard={mouseTrackCard}
        trackCardData={trackCardData}
        mouseTrackCardInner={mouseTrackCardInner}
      />
    </section>
  );
};

export default HomeBanner;

const twClasses = {
  home_banner:
    "sm:min-h-[calc(100svh_-_127.68px)] overflow-hidden flex items-center xs:py-10",
  container: "relative flex justify-center items-center h-full",
  grid_markings: "absolute top-0 left-0 size-full",
  title: {
    normal:
      "text-grey xxl:text-[96px] lg:text-[86px] md:text-[72px] sm:text-[64px] text-[40px] leading-[1.2] block text-center tracking-tight font-semibold xl:max-w-full sm:max-w-[576px] max-w-[320px] mx-auto xl:mb-0 mb-2",
    highlighted:
      "xxl:hidden lg:text-[86px] md:text-[72px] sm:text-[64px] text-[40px] leading-[1.2] tracking-tight font-semibold text-clip-primary xl:max-w-full sm:max-w-[576px] max-w-[320px] mx-auto block text-center",
  },
  description:
    "text-grey-900 text-base font-regular leading-normal sm:max-w-[435px] max-w-[320px] mx-auto text-center xl:pt-[3%] pt-8",
  button: "text-center xl:pt-[4%] pt-14 w-max mx-auto reveal to-top",
};
