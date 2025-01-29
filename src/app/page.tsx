import Logo from "@/assets/svg/Logo";
import ExitIcon from "@/assets/svg/ExitIcon";
import {Swiper} from "@/shared/Slider/Slider";
import React from "react";
import {Card} from "@/shared/Card/Card";

export default async function Home() {
  const res = await fetch("/api/cards/", {cache: 'force-cache'});
  const cards: Card[] = await res.json();
  return (
      <main className={'flex flex-col p-4'}>
        <header className={'flex justify-between items-center max-w-screen-xl w-full'}>
          <div className={'flex items-center gap-6 grow max-w-[320px]'}>
            <Logo/>
            <h1>STEMPS</h1>
          </div>
          <nav className={'hidden grow md:flex items-center justify-between'}>
            <ul className={'flex items-center gap-6'}>
              <li>О школе</li>
              <li>Курсы</li>
              <li>Библиотека</li>
            </ul>
            <div className={'flex items-center gap-6'}>
              <span>Вход</span>
              <button><ExitIcon/></button>
            </div>
          </nav>
          <button
              className={'flex sm:hidden p-4 bg-black text-white w-[58px] h-[24px] rounded justify-center items-center'}
          >
            Меню
          </button>
        </header>
        <section className={'flex text-4xl py-3 mb-10 text-primary-purple flex-col sm:flex-row'}>
          <span className={'grow max-w-[320px]'}>1.0</span>
          <h2>Наши услуги</h2>
        </section>
        <section className={'max-w-screen-xl'}>
          <Swiper cards={cards}/>
        </section>
      </main>
  );
}