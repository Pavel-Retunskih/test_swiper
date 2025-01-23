import Frame_1 from '../assets/images/Frame_1.png'
import {StaticImageData} from "next/image";

type Data = {
  imgUrl: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
}

const data: Data[] = [{
  imgUrl: Frame_1,
  imgAlt: 'picture',
  title: 'Анализ текущего состояния карьеры',
  description: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
}, {
  imgUrl: Frame_1,
  imgAlt: 'picture',
  title: 'Сопроводительные письма и резюме ',
  description: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
}, {
  imgUrl: Frame_1,
  imgAlt: 'picture',
  title: 'Поиск работы',
  description: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
}, {
  imgUrl: Frame_1,
  imgAlt: 'picture',
  title: 'Тренинг по презентации личного бренда',
  description: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
}, {
  imgUrl: Frame_1,
  imgAlt: 'picture',
  title: 'Подготовка к собеседованию',
  description: 'Научим говорить о себе кратко, ярко и профессионально.',
}, {
  imgUrl: Frame_1,
  imgAlt: 'picture',
  title: 'Рекомендация по базе STEMPS Career',
  description: 'Поможем встретиться соискателю и работодателю.',
}];