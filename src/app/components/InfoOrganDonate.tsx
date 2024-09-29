"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FacebookShareButton } from "react-share";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/slider.module.scss'

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
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ];

  const [photosLoaded, setPhotosLoaded] = useState<boolean[]>(Array(photos.length).fill(false));

  const handleImageLoad = useCallback((index: number) => {
    setPhotosLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);
  const [origin, setOrigin] = useState<string>("");

  // Solo asignar `window.location.origin` en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="relative z-10 mt-2">
        <ul className="flex justify-center space-x-2 -m-12">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className={`${styles.dot} slick-active:${styles.activeDot}`} /> 
    ),
  };
  

  return (
    <>
      <div className="flex w-full mb-20">
        <div className="bg-green-600 w-[50%] h-6 " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 px-16">
        <div className="flex flex-col">
            <div className="flex flex-col space-y-8">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={`video-slider-left-${index}`} className="flex- flex-col">
                      <div
                        className="w-full h-60 relative overflow-visible rounded-md bg-skeleton-dark"
                      >
                        <Slider {...settings}>
                      <div className="relative w-full h-60 z-0">
                        <LazyVideo videoUrl={videos[index * 2 + 10]} />
                      </div>
                      <div className="relative w-full h-60 z-0">
                        <LazyVideo videoUrl={videos[index * 2 + 11]} />
                      </div>
                        </Slider>
                      </div>
                      <div className="py-4 px-5" >
                          <p className="text-sm  text-center font-light font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum, reiciendis minus molestiae sed quas quis voluptatibus? Dolorem beatae totam consequuntur obcaecati eius? Fuga, reprehenderit aspernatur! Obcaecati id molestiae amet.</p>
                       </div>
                  </div>
                ))}
            </div>
       
      </div>

        <div className="flex flex-col space-y-8">
          {photos.map((photoUrl, index) => (
            <>
              <div className="flex flex-col"  key={`photo-${index}`}>
                <div
                  className="relative w-full h-60 overflow-hidden rounded-md bg-skeleton-dark"
                >
                  <Image
                    src={photoUrl}
                    alt={`Photo ${index}`}
                    width={1920}
                    height={1080}
                    className="object-cover w-full h-full"
                  />
                  {origin && (
                <FacebookShareButton
                  url={origin + photoUrl}
                  hashtag="#OrganDonation"
                  className="absolute top-1 right-2 group"
                >
                  <div className=" group p-2 rounded-full ">
                    <Image
                      src="/share-icon.png"
                      alt="Share in Facebook"
                      width={46}
                      height={46}
                      className="w-7 h-7"
                    />
                  </div>
                  <div className="absolute top-8 right-0 text-skeleton-light font-bold text-xs px-2 py-1  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Share
                  </div>
                </FacebookShareButton>
              )}
                </div>
                <div className="py-4 px-5" >
                <p className="text-sm  text-center font-light font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum, reiciendis minus molestiae sed quas quis voluptatibus? Dolorem beatae totam consequuntur obcaecati eius? Fuga, reprehenderit aspernatur! Obcaecati id molestiae amet.</p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-col space-y-8">
        {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={`video-slider-left-${index}`} className="flex- flex-col">
                      <div
                        className="w-full h-60 relative overflow-visible rounded-md bg-skeleton-dark"
                      >
                        <Slider {...settings}>
                      <div className="relative w-full h-60 z-0">
                        <LazyVideo videoUrl={videos[index * 2 + 10]} />
                      </div>
                      <div className="relative w-full h-60 z-0">
                        <LazyVideo videoUrl={videos[index * 2 + 11]} />
                      </div>
                        </Slider>
                      </div>
                      <div className="py-4 px-5" >
                          <p className="text-sm  text-center font-light font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum, reiciendis minus molestiae sed quas quis voluptatibus? Dolorem beatae totam consequuntur obcaecati eius? Fuga, reprehenderit aspernatur! Obcaecati id molestiae amet.</p>
                       </div>
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
