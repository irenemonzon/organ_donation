"use client";
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
    setPhotosLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);

  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      if (videoRefs.current) {
        videoRefs.current.forEach((video) => video && observer.unobserve(video));
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 px-16">
      {/* Sección de videos a la izquierda */}
      <div className="flex flex-col space-y-8">
        {videos.map((videoUrl, index) => (
          <div
            key={`video-${index}`}
            className="w-full h-48 overflow-hidden rounded-md relative"
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            style={{ position: 'relative' }}
          >
            {!visibleVideos[index] && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-md animate-pulse"
                style={{ transition: "opacity 0.5s ease" }}
              >
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
            {visibleVideos[index] && (
              <Suspense fallback={<div className="text-gray-600">Loading video...</div>}>
                <LazyVideo videoUrl={videoUrl} />
              </Suspense>
            )}
          </div>
        ))}
      </div>

      {/* Sección de fotos al centro */}
      <div className="flex flex-col space-y-8">
        {photos.map((photoUrl, index) => (
          <div key={`photo-${index}`} className="w-full h-48 overflow-hidden rounded-md relative">
            {!photosLoaded[index] && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-md animate-pulse"
                style={{ transition: "opacity 0.5s ease" }}
              >
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
            <Image
              src={photos[index]} // Usa el URL directamente
              alt={`Photo ${index}`}
              width={1920}
              height={1080}
              className={`object-cover w-full h-full ${photosLoaded[index] ? "opacity-100" : "opacity-0"}`}
              onLoad={() => handleImageLoad(index)}
              style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-8">
        {videos.map((videoUrl, index) => (
          <div
            key={`video-${index}`}
            className="w-full h-48 overflow-hidden rounded-md relative"
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
          >
            {!visibleVideos[index] && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-md animate-pulse"
                style={{ transition: "opacity 0.5s ease" }}
              >
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
            {visibleVideos[index] && (
              <Suspense fallback={<div className="text-gray-600">Loading video...</div>}>
                <LazyVideo videoUrl={videoUrl} />
              </Suspense>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoOrganDonate;
