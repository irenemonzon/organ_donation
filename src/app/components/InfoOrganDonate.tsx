"use client"

import React, { useState, useEffect, useCallback, Suspense, useRef } from "react";
import Image from "next/image";
import { FacebookShareButton } from "react-share";

const LazyVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <iframe
      src={videoUrl}
      title="Lazy Loaded Video"
      width="100%"
      height="100%"
      style={{ border: "none" }}
      allowFullScreen
      loading="lazy"
      className="w-full h-full opacity-100 transition-opacity duration-500"
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
  ];

  const [visibleVideos, setVisibleVideos] = useState<boolean[]>(Array(videos.length).fill(false));
  const [photosLoaded, setPhotosLoaded] = useState<boolean[]>(Array(photos.length).fill(false));

  const handleImageLoad = useCallback((index: number) => {
    setPhotosLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);

  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [origin, setOrigin] = useState<string>("");

  // Solo asignar `window.location.origin` en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = videoRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleVideos((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        }
      });
    });

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => video && observer.unobserve(video));
    };
  }, []);

  return (
    <>
      <div className="flex w-full mb-20">
        <div className="bg-green-line w-[45%] h-6 rounded-r-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 px-16">
        <div className="flex flex-col space-y-8">
          {videos.map((videoUrl, index) => (
            <div
              key={`video-${index}`}
              className="w-full h-60 overflow-hidden rounded-md relative bg-skeleton-dark"
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {!visibleVideos[index] && (
                  <div className="w-full h-full bg-skeleton-gradient animate-shimmer" />
                )}
                {visibleVideos[index] && (
                  <Suspense fallback={<div className="w-full h-full bg-skeleton-gradient animate-shimmer" />}>
                    <LazyVideo videoUrl={videoUrl} />
                  </Suspense>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-8">
          {photos.map((photoUrl, index) => (
            <div key={`photo-${index}`} className="relative w-full h-60 overflow-hidden rounded-md bg-skeleton-dark">
              <div className="absolute inset-0 flex items-center justify-center">
              
                <Image
                  src={photoUrl}
                  alt={`Photo ${index}`}
                  width={1920}
                  height={1080}
                  priority
                  className="object-cover w-full h-full opacity-100"
                  onLoad={() => handleImageLoad(index)}
                  style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
                />
              </div>

              {origin && (
                <FacebookShareButton
                  url={origin + photoUrl}
                  hashtag="#OrganDonation"
                  className="absolute top-1 right-2 group"
                >
                  <div className=" group bg-gray-200 p-2 rounded-full ">
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
          ))}
        </div>

        <div className="flex flex-col space-y-8">
          {videos.map((videoUrl, index) => (
            <div
              key={`video-${index}`}
              className="w-full h-60 overflow-hidden rounded-md relative bg-skeleton-dark"
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {!visibleVideos[index] && (
                  <div className="w-full h-full bg-skeleton-gradient animate-shimmer" />
                )}
                {visibleVideos[index] && (
                  <Suspense fallback={<div className="w-full h-full bg-skeleton-gradient animate-shimmer" />}>
                    <LazyVideo videoUrl={videoUrl} />
                  </Suspense>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full mt-20 justify-end">
        <div className="flex bg-green-line w-[45%] h-6 rounded-l-2xl" />
      </div>
    </>
  );
};

export default InfoOrganDonate;
