import Image, {StaticImageData} from 'next/image'

export type Card = {
  imgUrl: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
}

export function Card({imgUrl, title, imgAlt, description}: Card) {

  return <div className={'flex flex-col max-w-[412px] w-full p-6 sm:p-4 border border-gray-200 rounded-lg'}>
    <div className={'flex gap-6'}>
      <Image src={imgUrl} width={60} height={60} alt={imgAlt}></Image>
      <h3>{title}</h3>
    </div>
    <p className={'mt-16'}>{description}</p>
  </div>
}