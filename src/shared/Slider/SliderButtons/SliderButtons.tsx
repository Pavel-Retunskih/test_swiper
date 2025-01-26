'use client'
import {ComponentPropsWithoutRef} from "react";

type SliderButtons = {
  cards: string[],
  currentIndex: number
  setCurrentIndexAction: (num: number) => void
} & ComponentPropsWithoutRef<'div'>


export function SliderButtons({cards, setCurrentIndexAction, currentIndex, ...rest}: SliderButtons) {

  return <div{...rest}>
    {cards.map((_, index) => {
      return (<button onClick={() => setCurrentIndexAction(index)} key={index}
                      className={index === currentIndex ? 'transform w-20 relative h-2 rounded bg-gray-300 before:absolute' +
                          ' before:block before:rounded  before:-translate-y-1/2 before:bg-black before:h-2' +
                          ' before:w-5 before:content-[""]' : ' bg-gray-300' +
                          ' h-2 w-2' +
                          ' rounded-full'}></button>)
    })}
  </div>
}