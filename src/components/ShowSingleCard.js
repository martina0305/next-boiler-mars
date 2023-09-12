import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

//continue with filter 2023
{/*const checkYear = () => {
  const [year, setYear] = useState({});
}

const yearShow = show.premiered;*/}


const ShowSingleCard = ({ show }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      {show.image && (
        <Image
          src={show.image?.original}
          width={680}
          height={1000}
          alt={show.name}
        />
      )}
    </div>
  );
};

export default ShowSingleCard;
