"use client";
import React, {useEffect, useRef, useState} from "react";
import {SliderContainer} from "@/shared/Slider/SliderContainer/SliderContainer";

export const Swiper = () => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxCardCount, setMaxCardCount] = useState(1);
  const [containerSize, setContainerSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);


  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6", "Card 7", "Card 8"];

  const updateMaxCardCount = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setMaxCardCount(Math.max(1, Math.floor(containerWidth / 420)));
    }
  };

  useEffect(() => {
    updateMaxCardCount();
    window.addEventListener("resize", updateMaxCardCount);
    return () => {
      window.removeEventListener("resize", updateMaxCardCount);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ("touches" in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    let currentX: number;
    if ("touches" in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    const deltaX = currentX - startX;
    if (deltaX > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsDragging(false);
    } else if (deltaX < -50 && currentIndex < cards.length - maxCardCount) {
      setCurrentIndex((prev) => prev + 1);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
      <div
          ref={containerRef}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden w-full"

      >
        <SliderContainer
            currentIndex={currentIndex}
            isDragging={isDragging}
            cards={cards}
            visibleCount={maxCardCount}
        />
      </div>
  );
};
