import React, {forwardRef} from "react";
import {Card} from "@/shared/Card/Card";

type Props = {
  cards: Card[];
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
              {cards.map(({imgAlt, imgUrl, title, description}, index) => (
                  <Card imgAlt={imgAlt} imgUrl={imgUrl} title={title} description={description}
                        key={index}
                  >

                  </Card>
              ))}
            </div>
          </div>
      );
    }
);
