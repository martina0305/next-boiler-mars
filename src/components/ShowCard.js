import Image from 'next/image';
import ButtonLink from './ButtonLink';



const ShowCard = ({ actualShow }) => {
  const { name, id, image, premiered } = actualShow;
  const premieredYear = premiered.split('-')[0];
  
  return (
    <div className='w-52 size_container flex flex-col items-start gap-2'>
      <div className='mb-2 h-auto'>
        <Image src={image?.original} width={300} height={400} alt={name} />
      </div>
      <h2 className='m-0 text-left text-base text-white font-bold tracking-wide'>{name}</h2>
      <h3 className='font-normal text-base text-white tracking-wide'>{premieredYear}</h3>
      <ButtonLink id={id} />
    </div>
  );
};

export default ShowCard;
