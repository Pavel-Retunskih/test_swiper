'use client'
import React, {useEffect, useRef, useState} from "react";

export const Swiper = () => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxCardCount, setMaxCardCount] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  console.log(maxCardCount)
  const updateContainerWidth = () => {
    if (containerRef.current) {
      setMaxCardCount(Math.floor(containerRef.current.offsetWidth / 400));
    }
  };
  useEffect(() => {
    // Обновляем ширину при монтировании компонента
    updateContainerWidth();

    // Добавляем обработчик события resize
    window.addEventListener("resize", updateContainerWidth);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6", "Card 7", "Card 8"];

  const handleTouchStart = (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault(); // Предотвращаем прокрутку страницы при свайпе
    if ("touches" in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
    setIsDragging(true);
  };

  const handleTouchMove = (
      e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    let currentX: number;
    if ("touches" in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }

    const deltaX = currentX - startX;

    // Перемещаем слайды
    if (deltaX > 50 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setIsDragging(false);
    } else if (deltaX < -50 && currentIndex < cards.length - maxCardCount) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
      <div
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{touchAction: "none"}} // Чтобы отключить прокрутку при свайпе
      >{currentIndex + 1}
        <div ref={containerRef}
             style={{
               width: '75%',
               overflow: "hidden",
               display: "flex",
               gap: "10px",
               padding: "10px",
             }}
        >
          {cards.map((card, index) => (
              <div
                  key={index}
                  style={{
                    transform: `translateX(-${currentIndex * (400 + 10)}px)`,
                    transition: isDragging ? "none" : "transform 0.3s ease",
                    width: "400px",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    height: "200px",
                    background: "#007aff",
                    color: "#fff",
                  }}
              >
                {card}
              </div>
          ))}
        </div>
      </div>
  );
};
