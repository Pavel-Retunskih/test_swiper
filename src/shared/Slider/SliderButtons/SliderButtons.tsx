export function SliderButtons({cards, setCurrentIndex, currentIndex}: {
  cards: string[],
  currentIndex: number
  setCurrentIndex: (num: number) => void
}) {

  return <div>
    {cards.map((_, index) => {
      return (<button onClick={() => setCurrentIndex(index)} key={index}
                      className={index === currentIndex ? 'bg-blue-500' : 'bg-blue-300'}>{index + 1}</button>)
    })}
  </div>
}