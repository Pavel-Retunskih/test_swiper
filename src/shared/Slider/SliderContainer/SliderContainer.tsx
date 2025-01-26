import React, {forwardRef} from "react";

type Props = {
  cards: string[];
  isDragging: boolean;
  currentIndex: number;
  visibleCount: number;
};

export const SliderContainer = forwardRef<HTMLDivElement, Props>(
    ({cards, isDragging, currentIndex, visibleCount}, ref) => {
      const cardWidth = 400;
      const gap = 10;
      const visibleWidth = visibleCount * (cardWidth + gap);


      return (
          <div
              ref={ref}
              className="relative flex items-center mx-auto overflow-hidden"
              style={{
                width: `${visibleWidth}px`,
              }}

          >
            <div
                className="flex transition-transform"
                style={{
                  transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                  transition: isDragging ? "none" : "transform 0.3s ease-in-out",
                  gap: `${gap}px`,
                }}
            >
              {cards.map((card, index) => (
                  <div
                      key={index}
                      style={{
                        width: `${cardWidth}px`,
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#007aff",
                        color: "#fff",
                        fontSize: "24px",
                        borderRadius: "8px",
                        touchAction: "none"
                      }}
                  >
                    {card}
                  </div>
              ))}
            </div>
          </div>
      );
    }
);
