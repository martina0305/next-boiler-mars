import Image from 'next/image';
import ButtonLink from './ButtonLink';

const ShowCard = ({ actualShow }) => {
  const { name, id, image, premiered } = actualShow;
  return (
    <div className='w-52 size_container'>
      <div className='mb-2 h-auto'>
        <Image src={image?.original} width={300} height={400} alt={name} />
      </div>
      <h3>{name}</h3>
      <h2>{premiered}</h2>
      <ButtonLink id={id} />
    </div>
  );
};

export default ShowCard;
