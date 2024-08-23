"use client";
import React, { useLayoutEffect } from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const MainHeader = () => {
  useLayoutEffect(() => {
    let revealTl = gsap.timeline();

    revealTl.fromTo(
      ".reveal.to-bottom",
      { y: -50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 3,
        ease: "expo.out",
        stagger: { amount: 0.5 },
      }
    );
  }, []);

  return (
    <header className={`main-header reveal to-bottom ${twClasses.main_header}`}>
      <Container>
        <div className="flex justify-between gap-10">
          <Link href={`/`}>
            <Image
              src="/images/juspay-logo.svg"
              alt="juspay-logo"
              width={175}
              height={56}
            />
          </Link>
          <nav className={`main-header__nav ${twClasses.nav}`}>
            <ul className={`nav-links ${twClasses.nav_links}`}>
              <li
                className={`nav-links__item ${twClasses.nav_link_item.base} ${twClasses.nav_link_item.hover}`}
              >
                <Link href={`/`} aria-label="Go to About us page">
                  About us
                </Link>
              </li>
              <li
                className={`nav-links__item ${twClasses.nav_link_item.base} ${twClasses.nav_link_item.hover}`}
              >
                <Link href={`/`} aria-label="Go to Docs page">
                  Docs
                </Link>
              </li>
              <li
                className={`nav-links__item ${twClasses.nav_link_item.base} ${twClasses.nav_link_item.hover}`}
              >
                <Link href={`/`} aria-label="Go to Integrations page">
                  Integrations
                </Link>
              </li>
            </ul>
            <ul className={`other-nav-list ${twClasses.other_nav}`}>
              <li className="nav-list__item">
                <button
                  className={`language-selector ${twClasses.language_selector.base} ${twClasses.language_selector.hover}`}
                  aria-label="Switch language"
                >
                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.568 2.33276C21.0113 2.33276 26.2347 7.55611 26.2347 13.9994C26.2347 20.4427 21.0113 25.6661 14.568 25.6661C8.12471 25.6661 2.90137 20.4427 2.90137 13.9994C2.90137 7.55611 8.12471 2.33276 14.568 2.33276ZM19.2397 15.0234C18.8367 14.4116 18.546 13.9698 17.4406 14.145C15.3517 14.4766 15.1201 14.8422 15.0204 15.4432L14.9922 15.6261L14.9639 15.8191C14.8499 16.616 14.8542 16.9175 15.2201 17.302C16.6961 18.8507 17.5804 19.9669 17.8482 20.6198C17.979 20.9392 18.3153 21.9037 18.0839 22.8576C19.5114 22.2905 20.7696 21.3882 21.7609 20.248C21.8895 19.8119 21.9823 19.2688 21.9823 18.6099V18.4878C21.9823 17.4116 21.9823 16.9208 21.2217 16.4861C20.9007 16.3037 20.6612 16.1939 20.4693 16.1069C20.0409 15.9121 19.7572 15.7841 19.3745 15.2243C19.3288 15.1577 19.2843 15.0912 19.2397 15.0234ZM14.568 4.47165C11.8644 4.47165 9.42376 5.59777 7.6896 7.40655C7.89605 7.54993 8.07596 7.75138 8.19954 8.02908C8.43754 8.5631 8.43754 9.1125 8.43754 9.59834C8.43706 9.98168 8.43652 10.3445 8.55961 10.608C8.7282 10.9677 9.45383 11.1204 10.0944 11.2547C10.3233 11.3029 10.5593 11.3521 10.774 11.4115C11.3644 11.5755 11.8212 12.1053 12.1873 12.5308C12.3392 12.708 12.5636 12.9684 12.6761 13.0331C12.7347 12.991 12.923 12.787 13.0162 12.4518C13.0872 12.1966 13.067 11.9691 12.9626 11.8461C12.3103 11.0763 12.3458 9.59316 12.5474 9.04687C12.8649 8.18483 13.8569 8.24844 14.582 8.29556C14.8525 8.31297 15.1077 8.3297 15.298 8.30582C16.0243 8.2147 16.2476 7.11071 16.4055 6.89443C16.7463 6.42754 17.7888 5.72438 18.4365 5.28973C17.2543 4.76389 15.9453 4.47165 14.568 4.47165Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </button>
              </li>
              <li
                className={`nav-list__item ${twClasses.nav_list_item.base} ${twClasses.nav_list_item.hover}`}
              >
                <Link
                  href={`/`}
                  className="flex items-center gap-[2px]"
                  aria-label="Go to contact us page"
                >
                  <span className="link-text">Contact us</span>
                  <span className="link-icon">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.90137 6.78271C10.1196 7.66777 11.2108 8.70528 12.1465 9.86782C12.2641 10.0139 12.2641 10.2182 12.1465 10.3643C11.2108 11.5268 10.1196 12.5643 8.90137 13.4494"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;

const twClasses = {
  main_header: "py-9 z-[1024] relative",
  nav: "flex items-center gap-[52px]",
  nav_links: "flex items-center gap-11",
  nav_link_item: {
    base: "text-white text-lg font-semibold leading-[1.6] transition-colors ease-in-out duration-300",
    hover: "hover:text-primary",
  },
  other_nav: "flex items-center gap-8",
  language_selector: {
    base: "size-[52px] border border-black-800 rounded-full flex justify-center items-center will-change-transform transition-all ease-in-out duration-300",
    hover: "hover:scale-110 hover:bg-black-800",
  },
  nav_list_item: {
    base: "text-primary text-lg font-semibold leading-[1.6] transition-colors ease-in-out duration-300",
    hover: "hover:text-primary-800",
  },
};
