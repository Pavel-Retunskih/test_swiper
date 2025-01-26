type Data = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  description: string;
}

const mockData: Data[] = [{
  imgUrl: '/images/Frame_1.png',
  imgAlt: 'picture',
  title: 'Анализ текущего состояния карьеры',
  description: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
}, {
  imgUrl: '/images/Frame_1.png',
  imgAlt: 'picture',
  title: 'Сопроводительные письма и резюме ',
  description: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
}, {
  imgUrl: '/images/Frame_1.png',
  imgAlt: 'picture',
  title: 'Поиск работы',
  description: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
}, {
  imgUrl: '/images/Frame_1.png',
  imgAlt: 'picture',
  title: 'Тренинг по презентации личного бренда',
  description: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
}, {
  imgUrl: '/images/Frame_1.png',
  imgAlt: 'picture',
  title: 'Подготовка к собеседованию',
  description: 'Научим говорить о себе кратко, ярко и профессионально.',
}, {
  imgUrl: '/images/Frame_1.png',
  imgAlt: 'picture',
  title: 'Рекомендация по базе STEMPS Career',
  description: 'Поможем встретиться соискателю и работодателю.',
}];

export async function GET() {
  return new Response(JSON.stringify(mockData), {
    status: 200,
    headers: {'Content-Type': 'application/json'}
  });
}
