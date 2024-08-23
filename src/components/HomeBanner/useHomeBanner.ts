import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, MutableRefObject, useState, useLayoutEffect } from "react";

gsap.registerPlugin(useGSAP);

interface useHomeBanner {
  container: MutableRefObject<HTMLDivElement | null>;
  mouseTrackCard: MutableRefObject<HTMLDivElement | null>;
  mouseTrackCardInner: MutableRefObject<HTMLDivElement | null>;
  hoverableElements: MutableRefObject<HTMLDivElement | null>[];
  trackCardData: TrackCardData;
  slotLetters: MutableRefObject<HTMLDivElement | null>[];
}

export interface TrackCardData {
  image: {
    src: string;
    alt: string;
  };
  stats: {
    count: string;
    name: string;
  };
}

const trackCardDataset = [
  {
    image: {
      src: "/images/general-hover.svg",
      alt: "a women holding a large teddy bear and a mobile phone",
    },
    stats: {
      count: "125Mn+",
      name: "Daily Txns",
    },
  },
  {
    image: {
      src: "/images/global-image.png",
      alt: "global",
    },
    stats: {
      count: "99.99%",
      name: "Uptime",
    },
  },
  {
    image: {
      src: "/images/global-image.png",
      alt: "global",
    },
    stats: {
      count: "$500Bn+",
      name: "Annual PTV",
    },
  },
];

const useHomeBanner = (): useHomeBanner => {
  const container = useRef<HTMLDivElement | null>(null);
  const mouseTrackCard = useRef<HTMLDivElement | null>(null);
  const mouseTrackCardInner = useRef<HTMLDivElement | null>(null);
  const hoverableElements = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const [trackCardData, setTrackCardData] = useState<TrackCardData>(
    trackCardDataset[0]
  );
  const [cardDataIndex, setCardDataIndex] = useState(0);
  const slotLetters = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        if (container.current) {
          const { clientX: x, clientY: y } = e;
          const {
            left: containerLeft,
            top: containerTop,
            right: containerRight,
            bottom: containerBottom,
            width: containerWidth,
          } = container.current.getBoundingClientRect();

          const isInsideContainer =
            x >= containerLeft &&
            x <= containerRight &&
            y >= containerTop &&
            y <= containerBottom;

          const changeCardData = (dataIndex: number) => {
            setCardDataIndex(dataIndex);
          };

          if (x < containerWidth * 0.3333) changeCardData(0);
          else if (x >= containerWidth * 0.6666) changeCardData(2);
          else changeCardData(1);

          const isInsideAnyElement = hoverableElements.some((hoverableRef) => {
            if (hoverableRef.current) {
              const { left, top, right, bottom } =
                hoverableRef.current.getBoundingClientRect();
              return x >= left && x <= right && y >= top && y <= bottom;
            }
            return false;
          });
          if (isInsideContainer && !isInsideAnyElement) {
            gsap.to(mouseTrackCard.current, {
              top: `${y}px`,
              left: `${x}px`,
              scale: 1,
              autoAlpha: 1,
              force3d: true,
              transformOrigin: "center",
            });
          } else {
            gsap.to(mouseTrackCard.current, {
              top: `${y}px`,
              left: `${x}px`,
              scale: 0.5,
              autoAlpha: 0,
              force3d: true,
              transformOrigin: "center",
              duration: 0.3,
            });
          }
        }
      };

      slotLetters.forEach((letter) => {
        gsap.to(letter.current, {
          y: -115.2 * 4,
          force3d: true,
          duration: Math.random() * (5 - 4) + 4,
          ease: "power4.inOut",
        });
      });

      window?.addEventListener("mousemove", handleMouseMove);
      return () => {
        window?.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: container }
  );
  useLayoutEffect(() => {
    gsap.to(mouseTrackCardInner.current, {
      scale: 0.5,
      autoAlpha: 0,
      force3d: true,
      transformOrigin: "center",
      duration: 0.3,
      onStart: () => {
        setTimeout(() => {
          setTrackCardData(trackCardDataset[cardDataIndex]);
        }, 150);
      },
      onComplete: () => {
        gsap.to(mouseTrackCardInner.current, {
          scale: 1,
          autoAlpha: 1,
          force3d: true,
          transformOrigin: "center",
          duration: 0.3,
        });
      },
    });
  }, [cardDataIndex]);

  return {
    container,
    mouseTrackCard,
    mouseTrackCardInner,
    hoverableElements,
    trackCardData,
    slotLetters,
  };
};

export default useHomeBanner;
