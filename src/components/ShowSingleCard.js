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


const ShowSingleCard = ({ show, crew, crewLoading, cast, castLoading, season, seasonLoading}) => {
  const premieredYear = show.premiered.split('-')[0];
  
  return (
    <div className='grid grid-cols-12 gap-8 h-auto bg-gradient-to-tr from-red-950 to-stone-700 p-2 w-full'>
        <div className='col-start-2 col-end-5 rounded mb-16'>
        {show.image && (
          <Image
            src={show.image?.original}
            width={300}
            height={400}
            alt={show.name}
            className='flex w-full rounded-lg border-2 border-yellow-500'
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
          <div>
            <p className='mb-2 text-zinc-300 text-sm'>{show.genres.join(', ')}</p>
          </div>
          <div className='inline-flex w-full gap-2 mb-8 text-zinc-300 text-sm'>
            <h5 className='font-bold'>Weekly Schedule:</h5>
            <p>{show.schedule.days}</p>
            <p>{show.schedule.time +` hs`}</p>
          </div>
          <div className='mb-8 text-white text-base w-full'>
            <div dangerouslySetInnerHTML = {{__html:show.summary}}></div>
          </div>
          <div className='flex text-white text-sm w-full gap-1'>
            <h4>Official Site: </h4><a className="underline" href={show.officialSite}>{show.officialSite}</a>
          </div>
          <div className='flex gap-2 text-white text-sm'>
            <h5>Created by: </h5>
          {!crewLoading && <div>
            {crew.map((item, index) => <p key={index}>{item.person.name}</p>)}
            </div>}
          </div>
        </div>
        <section className='col-start-2 col-end-13 mb-16'>
          <h2 className='mb-0 text-left font-semibold text-white text-2xl'>Seasons</h2>
          {!seasonLoading && <div className='flex gap-8 mt-6 overflow-x-auto'>
            {season.map((item, index) => <div key={index} className='flex flex-col gap-2'> 
              <div className='hover:opacity-50'>{item.image && (<Image className='object-cover rounded-lg max-w-none' src={item.image?.original} width={300} height={400}/>)}</div>
              <h4 className='text-sm text-white font-normal'>Season {item.number}</h4>
              <p className='text-sm text-stone-400 font-normal'>{item.episodeOrder} episodes</p>
              </div>)}
            </div>}
        </section>
        <section className='col-start-2 col-end-13'>
          <h2 className='mb-0 text-left font-semibold text-white text-2xl'>Cast & Crew</h2>
          {!castLoading && <div className='flex gap-8 mt-6 overflow-x-auto'>
            {cast.map((item, index) => <div key={index} className='flex flex-col gap-2 text-center col-span-2'> 
              <div className='w-52'>{item.person.image && (<Image className='object-cover rounded-full h-52' src={item.person.image?.original} width={300} height={400} alt={item.person.name}/>)}</div>
              <h4 className='text-sm text-stone-300 font-normal'>{item.character.name}</h4>
              <p className='text-sm text-stone-400 font-normal'>{item.person.name}</p>
              </div>)}
            </div>}
        </section>
    </div>    
  );
};

export default ShowSingleCard;
