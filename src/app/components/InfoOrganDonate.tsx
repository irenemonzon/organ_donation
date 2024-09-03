"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(Array(videos.length).fill(false));

  const handleImageLoad = useCallback((index: number) => {
    setPhotosLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);

  const handleVideoLoad = (index: number) => {
    setVideosLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  useEffect(() => {
    const elements = document.querySelectorAll('iframe[data-index]');
    elements.forEach((el) => {
      if (el instanceof HTMLIFrameElement) {
        const index = el.getAttribute('data-index');
        if (index !== null && !videosLoaded[parseInt(index, 10)]) {
          el.src = videos[parseInt(index, 10)];
          el.addEventListener('load', () => handleVideoLoad(parseInt(index, 10)));
        }
      }
    });
  }, [videosLoaded]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 px-14">
      {/* Sección de videos a la izquierda */}
      <div className="flex flex-col space-y-4">
        {videos.map((videoUrl, index) => (
          <div key={`video-${index}`} className="w-full h-48 overflow-hidden rounded-md relative">
            {!videosLoaded[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-md animate-pulse">
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
            <iframe
              src={videosLoaded[index] ? videoUrl : undefined}
              title={`Video ${index}`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
              className={`w-full h-full ${videosLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
              data-index={index}
            />
          </div>
        ))}
      </div>

      {/* Sección de fotos al centro */}
      <div className="flex flex-col space-y-4">
        {photos.map((photoUrl, index) => (
          <div key={`photo-${index}`} className="w-full h-48 overflow-hidden rounded-md relative">
            {!photosLoaded[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-md animate-pulse">
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
            <Image
              src={photos[index]} // Usa el URL directamente
              alt={`Photo ${index}`}
              width={1920}
              height={1080}
              className={`object-cover w-full h-full ${photosLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(index)}
              style={{ transition: 'opacity 0.5s ease' }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-4">
        {videos.map((videoUrl, index) => (
          <div key={`video-${index}`} className="w-full h-48 overflow-hidden rounded-md relative">
            {!videosLoaded[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-md animate-pulse">
                <span className="text-gray-600">Loading...</span>
              </div>
            )}
            <iframe
              src={videosLoaded[index] ? videoUrl : undefined}
              title={`Video ${index}`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
              className={`w-full h-full ${videosLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
              data-index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoOrganDonate;
