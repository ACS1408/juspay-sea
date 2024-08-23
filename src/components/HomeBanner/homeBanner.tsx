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
          <h1 className="home-banner__title" ref={hoverableElements[0]}>
            <span
              className={`home-banner__title--normal ${twClasses.title.normal}`}
            >
              Payments designed for
            </span>
            <CharacterSlots slotLetters={slotLetters} />
          </h1>
          <p
            className={`home-banner__description ${twClasses.description}`}
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
            className="text-center pt-[4%] w-max mx-auto"
            ref={hoverableElements[2]}
          >
            <Link href={`/`} className="btn-gradient-outline inline-block">
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
  home_banner: "h-[calc(100svh_-_127.68px)] overflow-hidden flex items-center",
  container: "relative flex justify-center items-center h-full",
  grid_markings: "absolute top-0 left-0 size-full",
  title: {
    normal:
      "text-grey text-[96px] leading-[1.2] block text-center tracking-tight font-semibold",
  },
  description:
    "text-grey-900 text-base font-regular leading-normal max-w-[435px] mx-auto text-center pt-[3%]",
};
