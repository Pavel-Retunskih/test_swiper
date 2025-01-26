import Logo from "@/assets/svg/Logo";
import ExitIcon from "@/assets/svg/ExitIcon";
import {Swiper} from "@/shared/Slider/Slider";
import React from "react";


export default async function Home() {
  const res = await fetch("http://localhost:3000/api/cards")
  const cards = await res.json();
  console.log(cards);
  return <main className={'flex flex-col'}>
    <header className={'flex items-center max-w-screen-xl w-full'}>
      <div className={'flex items-center gap-6 grow max-w-[300px]'}>
        <Logo/>
        <h1>STEMPS</h1>
      </div>
      <div className={'max-w-[1040px] w-full flex items-center justify-between'}>
        <nav>
          <ul className={'flex items-center gap-6'}>
            <li>О школе</li>
            <li>Курсы</li>
            <li>Библиотека</li>
          </ul>
        </nav>
        <div>
        <span>
        Вход
      </span>
          <button><ExitIcon/></button>
          <button className={'hidden'}>Меню</button>
        </div>
      </div>
    </header>
    <section>
      <span>1.0</span>
      <h2>Наши услуги</h2>
    </section>
    <section className={'max-w-screen-xl'}>
      <Swiper cards={cards}/>
    </section>
  </main>
}
