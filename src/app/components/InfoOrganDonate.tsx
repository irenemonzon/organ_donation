"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { FacebookShareButton } from "react-share";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LazyVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <iframe
      src={videoUrl}
      title="Lazy Loaded Video"
      className="w-full h-full border-none transition-opacity duration-500"
      allowFullScreen
      loading="lazy"
      style={{ aspectRatio: '16/9' }} // Mantener la proporción 16:9
    />
  );
};

const InfoOrganDonate = () => {
  const photos = [
    "/interview1.jpg",
    "/interview2.jpg",
    "/interview3.jpg",
    "/interview1.jpg",
    "/interview2.jpg",
  ];

  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false, // Deshabilitar adaptiveHeight
    appendDots: (dots: React.ReactNode) => (
      <div className="relative z-10">
        <ul className="flex justify-center space-x-2 bottom-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="dot w-3 h-3 bg-gray-500 rounded-full transition-all duration-300 hover:bg-gray-900"></div>
    ),
  };

  return (
    <>
    <div className="flex w-full mb-20">
      <div className="bg-green-600 w-[50%] h-6 " />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 px-16">
      <div className="flex flex-col space-y-8">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={`video-slider-left-${index}`}
              className="w-full h-60 relative overflow-visible rounded-md bg-skeleton-dark"
            >
              <Slider {...settings}>
                <div className="relative w-full h-60 z-0">
                  <LazyVideo videoUrl={videos[index * 2 + 10]} />
                  <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10">
                  </button>
                  <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10">
                  </button>
                </div>
                <div className="relative w-full h-60 z-0">
                  <LazyVideo videoUrl={videos[index * 2 + 11]} />
                </div>
              </Slider>
            </div>
          ))}
      </div>

      <div className="flex flex-col space-y-8">
        {photos.map((photoUrl, index) => (
          <div
            key={`photo-${index}`}
            className="relative w-full h-60 overflow-hidden rounded-md bg-skeleton-dark"
          >
            <Image
              src={photoUrl}
              alt={`Photo ${index}`}
              width={1920}
              height={1080}
              className="object-cover w-full h-full"
            />
            <FacebookShareButton
              url={photoUrl}
              hashtag="#OrganDonation"
              className="absolute top-1 right-2 group"
            >
              <div className="group  p-2 rounded-full">
                <Image
                  src="/share-icon.png"
                  alt="Share on Facebook"
                  width={46}
                  height={46}
                  className="w-7 h-7"
                />
              </div>
              <div className="absolute top-8 right-0 text-skeleton-light font-bold text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Share
              </div>
            </FacebookShareButton>
          </div>
        ))}
      </div>

  
      <div className="flex flex-col space-y-8">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={`video-slider-right-${index}`}
              className="w-full h-60 relative overflow-visible rounded-md bg-skeleton-dark"
            >
              <Slider {...settings}>
                <div className="relative w-full rounded-md h-60">
                  <LazyVideo videoUrl={videos[index * 2 + 10]} />
                  <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10">
                
                  </button>
                  <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10">
                
                  </button>
                </div>
                <div className="relative w-full rounded-md h-60">
                  <LazyVideo videoUrl={videos[index * 2 + 11]} />
                </div>
              </Slider>
            </div>
          ))}
      </div>
    </div>
    <div className="flex w-full mt-20 justify-end">
        <div className="flex bg-green-600 w-[50%] h-6 " />
      </div>
    </>
  );
};

export default InfoOrganDonate;
