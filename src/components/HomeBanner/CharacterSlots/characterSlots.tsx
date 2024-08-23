import React, { MutableRefObject } from "react";

interface CharacterSlots {
  slotLetters: MutableRefObject<HTMLDivElement | null>[];
}
type CharSet = {
  char: string;
  width: number;
  otherChars: string[];
};

const characterSet1 = [
  {
    char: "G",
    width: 80,
    otherChars: ["£", "€", "$", "₹"],
  },
  {
    char: "L",
    width: 50,
    otherChars: ["€", "£", "$", "₹"],
  },
  {
    char: "O",
    width: 80,
    otherChars: ["₹", "£", "€", "$"],
  },
  {
    char: "B",
    width: 70,
    otherChars: ["$", "€", "£", "₹"],
  },
  {
    char: "A",
    width: 65,
    otherChars: ["£", "$", "€", "₹"],
  },
  {
    char: "L",
    width: 50,
    otherChars: ["₹", "£", "€", "$"],
  },
] satisfies CharSet[];

const characterSet2 = [
  {
    char: "O",
    width: 80,
    otherChars: ["$", "€", "£", "₹"],
  },
  {
    char: "U",
    width: 70,
    otherChars: ["€", "$", "£", "₹"],
  },
  {
    char: "T",
    width: 55,
    otherChars: ["£", "₹", "€", "$"],
  },
  {
    char: "C",
    width: 75,
    otherChars: ["₹", "£", "€", "$"],
  },
  {
    char: "O",
    width: 80,
    otherChars: ["£", "€", "$", "₹"],
  },
  {
    char: "M",
    width: 80,
    otherChars: ["$", "€", "£", "₹"],
  },
  {
    char: "E",
    width: 55,
    otherChars: ["€", "$", "₹", "£"],
  },
  {
    char: "S",
    width: 60,
    otherChars: ["₹", "£", "€", "$"],
  },
] satisfies CharSet[];

const CharacterSlots: React.FC<CharacterSlots> = ({ slotLetters }) => {
  return (
    <div className={`character-slots ${twClasses.character_slots}`}>
      <span
        className={`home-banner__title--highlight ${twClasses.title.highlighted}`}
      >
        {characterSet1?.map((item, i) => {
          return (
            <div
              className={`highlight-letter ${twClasses.highlight_letter}`}
              key={i}
            >
              <div
                className={`letter-list ${twClasses.letter_list}`}
                ref={slotLetters[i]}
              >
                {item?.otherChars?.map((data, j) => {
                  return (
                    <div
                      className="letter-box"
                      style={{ width: `${item?.width}px` }}
                      key={j}
                    >
                      {data}
                    </div>
                  );
                })}
                <div
                  className="block visible-letter"
                  style={{ width: `${item?.width}px` }}
                >
                  {item?.char}
                </div>
              </div>
            </div>
          );
        })}
      </span>
      <span
        className={`home-banner__title--highlight ${twClasses.title.highlighted}`}
      >
        {characterSet2?.map((item, i) => {
          return (
            <div
              className={`highlight-letter ${twClasses.highlight_letter}`}
              key={i}
            >
              <div
                className={`letter-list ${twClasses.letter_list}`}
                ref={slotLetters[characterSet1.length + i]}
              >
                {item?.otherChars?.map((data, j) => {
                  return (
                    <div
                      className="letter-box"
                      style={{ width: `${item?.width}px` }}
                      key={j}
                    >
                      {data}
                    </div>
                  );
                })}
                <div
                  className="block visible-letter"
                  style={{ width: `${item?.width}px` }}
                >
                  {item?.char}
                </div>
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default CharacterSlots;

const twClasses = {
  character_slots:
    "flex justify-center xl:gap-8 gap-0 xl:flex-row flex-col items-center",
  title: {
    highlighted:
      "text-[96px] leading-[1.2] xxl:flex hidden text-center tracking-tight font-semibold",
  },
  letter_list: "text-clip-primary tracking-tighter",
  highlight_letter: "h-[115.2px] overflow-hidden",
};
