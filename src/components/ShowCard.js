import Image from 'next/image';
import ButtonLink from './ButtonLink';
import Link from 'next/link';

const ShowCard = ({ actualShow }) => {
  const { name, id, image, premiered } = actualShow;
  const premieredYear = premiered.split('-')[0];
  
  return (
    <div className='size_container'>
      <Link  href={`/show/${id}`} className='flex flex-col gap-2 h-auto'>
      <div className='height'>
        <Image src={image?.original} width={210} height={300} alt={name} className='object-cover max-w-none rounded-md none-height' id={'img'} />
      </div>
      <h2 className='m-0 text-left text-sm text-white font-normal tracking-wide'>{name}</h2>
      <h3 className='font-normal text-sm text-stone-400 tracking-wide text-left'>{premieredYear}</h3>
      {/*<ButtonLink id={id} />*/}
      </Link>
    </div>
  );
};

export default ShowCard;
