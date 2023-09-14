import dayjs from 'dayjs';
import Image from 'next/image';
import {FiStar} from 'react-icons/fi';

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

  const premieredYear = show.premiered.split('-')[0];
  
  return (
    <div className='grid grid-cols-12 gap-8 h-screen bg-gradient-to-tr from-red-950 to-stone-700 p-2 w-full'>
        <div className='col-start-2 col-end-5 rounded'>
        {show.image && (
          <Image
            src={show.image?.original}
            width={300}
            height={400}
            alt={show.name}
            className='flex w-full py-6'
          />
        )}
        </div>
        <div className='col-start-6 col-end-12 w-full py-6'>
          <div className='inline-flex items-center w-full mb-2'>
            <h2 className='font-bold m-0 text-white tracking-normal'>{show.name}</h2>
            <p className='font-normal pl-2 pr-2 pt-1 pb-1 bg-yellow-500 rounded ml-2 text-sm text-zinc-900'>{show.status}</p>
          </div>
          <div className='inline-flex gap-6 w-full mb-2 text-zinc-300 text-sm'>
            <p className='text-left'>{premieredYear}</p>
            <p>{show.runtime + `min`}</p>
            <div className='flex items-center gap-1'> 
            <FiStar className='stroke-yellow-500 fill-yellow-500'/> 
            <p>{show.rating.average}</p>
            </div>
          </div>
          <div className='inline-flex w-full gap-2 mb-2 text-zinc-300 text-sm'>
            <h5 className='font-bold'>Weekly Schedule:</h5>
            <p>{show.schedule.days}</p>
            <p>{show.schedule.time +` hs`}</p>
          </div>
            <p className='mb-8 text-zinc-300 text-sm'>{show.genres.join(', ')}</p>
          <div className='mb-8 text-white text-base'>

            <div dangerouslySetInnerHTML = {{__html:show.summary}}></div>
          </div>
          <div className='flex gap-2 text-white text-sm'>
            <h4>Official Site:</h4><a className="underline" href={show.officialSite}>{show.officialSite}</a>
          </div>
        </div>
        <section className='col-start-2 w-full text-white text-lg font-bold'>
          <h2>Season</h2>
        </section>
        <section className='col-start-2 w-full text-white text-lg font-bold'>
          <h2>Cast</h2>
        </section>
    </div>
    
  );
};

export default ShowSingleCard;
