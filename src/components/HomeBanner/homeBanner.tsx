"use client";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import useHomeBanner from "./useHomeBanner";
import MouseTrackCard from "./MouseTrackCard/mouseTrackCard";

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
            <div className="flex justify-center gap-8">
              <span
                className={`home-banner__title--highlight ${twClasses.title.highlighted}`}
              >
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[0]}
                  >
                    <div className="letter-box" style={{ width: "80px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "80px" }}
                    >
                      G
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[1]}
                  >
                    <div className="letter-box" style={{ width: "50px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "50px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "50px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "50px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "50px" }}
                    >
                      L
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[2]}
                  >
                    <div className="letter-box" style={{ width: "80px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      £
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "80px" }}
                    >
                      O
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[3]}
                  >
                    <div className="letter-box" style={{ width: "70px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "70px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "70px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "70px" }}>
                      £
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "70px" }}
                    >
                      B
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[4]}
                  >
                    <div className="letter-box" style={{ width: "65px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "65px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "65px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "65px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "65px" }}
                    >
                      A
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[5]}
                  >
                    <div className="letter-box" style={{ width: "50px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "50px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "50px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "50px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "50px" }}
                    >
                      L
                    </div>
                  </div>
                </div>
              </span>

              <span
                className={`home-banner__title--highlight ${twClasses.title.highlighted}`}
              >
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[6]}
                  >
                    <div className="letter-box" style={{ width: "80px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      £
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "80px" }}
                    >
                      O
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[7]}
                  >
                    <div className="letter-box" style={{ width: "70px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "70px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "70px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "70px" }}>
                      $
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "70px" }}
                    >
                      U
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[8]}
                  >
                    <div className="letter-box" style={{ width: "55px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "55px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "55px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "55px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "55px" }}
                    >
                      T
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[9]}
                  >
                    <div className="letter-box" style={{ width: "75px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "75px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "75px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "75px" }}>
                      €
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "75px" }}
                    >
                      C
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[10]}
                  >
                    <div className="letter-box" style={{ width: "80px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      €
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "80px" }}
                    >
                      O
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[11]}
                  >
                    <div className="letter-box" style={{ width: "80px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      ₹
                    </div>
                    <div className="letter-box" style={{ width: "80px" }}>
                      £
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "80px" }}
                    >
                      M
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[12]}
                  >
                    <div className="letter-box" style={{ width: "55px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "55px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "55px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "55px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "55px" }}
                    >
                      E
                    </div>
                  </div>
                </div>
                <div className="highlight-letter h-[115.2px] overflow-hidden">
                  <div
                    className="letter-list text-clip-primary tracking-tighter"
                    ref={slotLetters[13]}
                  >
                    <div className="letter-box" style={{ width: "60px" }}>
                      €
                    </div>
                    <div className="letter-box" style={{ width: "60px" }}>
                      £
                    </div>
                    <div className="letter-box" style={{ width: "60px" }}>
                      $
                    </div>
                    <div className="letter-box" style={{ width: "60px" }}>
                      ₹
                    </div>
                    <div
                      className="block visible-letter"
                      style={{ width: "60px" }}
                    >
                      S
                    </div>
                  </div>
                </div>
              </span>
            </div>
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
    highlighted:
      "text-[96px] leading-[1.2] flex text-center tracking-tight font-semibold",
  },
  description:
    "text-grey-900 text-base font-regular leading-normal max-w-[435px] mx-auto text-center pt-[3%]",
};
