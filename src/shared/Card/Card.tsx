import Image from 'next/image'

export type Card = {
  imgUrl: string;
  imgAlt: string;
  title: string;
  description: string;
}

export function Card({imgUrl, title, imgAlt, description}: Card) {
  const width = 400
  return <div style={{width: `${width}px `}} className={'cursor-pointer'}>
    <div className={'flex gap-6 select-none '}>
      <Image src={imgUrl} width={60} height={60} alt={imgAlt}></Image>
      <h3>{title}</h3>
    </div>
    <p className={'mt-16  select-none'}>{description}</p>
  </div>
}