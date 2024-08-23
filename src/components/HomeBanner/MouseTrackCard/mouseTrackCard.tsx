import Image from "next/image";
import React, { MutableRefObject } from "react";
import { TrackCardData } from "../useHomeBanner";

interface MouseTrackCard {
  mouseTrackCard: MutableRefObject<HTMLDivElement | null>;
  mouseTrackCardInner: MutableRefObject<HTMLDivElement | null>;
  trackCardData: TrackCardData;
}

const MouseTrackCard: React.FC<MouseTrackCard> = ({
  mouseTrackCard,
  mouseTrackCardInner,
  trackCardData,
}) => {
  return (
    <div
      className={`mouse-track-card ${twClasses.mouse_track_card}`}
      ref={mouseTrackCard}
    >
      <div className="card-inner" ref={mouseTrackCardInner}>
        <figure
          className={`mouse-track-card__inner ${twClasses.mouse_track_card_inner}`}
        >
          <Image
            src={trackCardData?.image?.src}
            alt={trackCardData?.image?.alt}
            width={213}
            height={213}
          />
        </figure>
        <div
          className={`mouse-track-card__stats ${twClasses.mouse_track_card_stats}`}
        >
          <div className={`stat-count ${twClasses.stat_count}`}>
            {trackCardData?.stats?.count}
          </div>
          <div className={`stat-name ${twClasses.stat_name}`}>
            {trackCardData?.stats?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MouseTrackCard;

const twClasses = {
  mouse_track_card:
    "fixed -translate-x-1/2 -translate-y-1/2 size-[213px] opacity-0 scale-1/2",
  mouse_track_card_inner: "rounded-[39px] overflow-hidden inline-block",
  mouse_track_card_stats:
    "bg-black-900 absolute bottom-6 right-0 px-5 py-4 translate-x-1/2 el-gradient-outline",
  stat_count: "text-white text-2xl font-semibold leading-none",
  stat_name: "text-grey-800 text-[13px] font-medium mt-2 leading-none",
};
