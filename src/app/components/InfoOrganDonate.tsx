"use client"

import React, { useState, useEffect, useCallback, Suspense, useRef } from "react";
import Image from "next/image";

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

  const [photosLoaded, setPhotosLoaded] = useState<boolean[]>(Array(photos.length).fill(false));
  const [visibleVideos, setVisibleVideos] = useState<boolean[]>(Array(videos.length).fill(false));


  const handleImageLoad = useCallback((index: number) => {
    setPhotosLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);

  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = videoRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleVideos(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        }
      });
    });

    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach(video => video && observer.unobserve(video));
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 px-16">
      <div className="flex flex-col space-y-8">
        {videos.map((videoUrl, index) => (
          <div
            key={`video-${index}`}
            className="w-full h-48 overflow-hidden rounded-md relative bg-skeleton-dark"
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
          <div key={`photo-${index}`} className="w-full h-48 overflow-hidden rounded-md relative bg-skeleton-dark">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={photoUrl}
                alt={`Photo ${index}`}
                width={1920}
                height={1080}
                priority
                className={`object-cover w-full h-full opacity-100`}
                onLoad={() => handleImageLoad(index)}
                unoptimized
                style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-8">
        {videos.map((videoUrl, index) => (
          <div
            key={`video-${index}`}
            className="w-full h-48 overflow-hidden rounded-md relative bg-skeleton-dark"
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
  );
};

export default InfoOrganDonate;
