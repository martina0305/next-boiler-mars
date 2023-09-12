import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

//continue with filter 2023
{/*const checkYear = () => {
  const [year, setYear] = useState({});
}
const yearShow = show.premiered;
const dateBase = dayjs('2022-01-01');
console.log(dateBase);

const filteredMovies = show.filter((serie) => {
  const releaseDate = dayjs(serie.releaseDate);
  return releaseDate.isAfter(dateBase);
});

// Now, `filteredMovies` contains only movies released since January 1, 2022
console.log(filteredMovies);*/}


const ShowSingleCard = ({ show }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      <h3>{show.premiered}</h3>
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
