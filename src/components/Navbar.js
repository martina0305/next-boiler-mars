import { FiCompass, FiFilm, FiBookmark, FiFilter, FiList, FiHome, FiCast, FiAirplay, FiTv } from 'react-icons/fi';

const Navbar = () =>{
  return(
    <div className='flex justify-center mt-14'>
      <div className='flex flex-col gap-8'>
        <FiCompass className='w-6 h-6 stroke-stone-400'/>
        <FiFilm className='w-6 h-6 stroke-stone-400' />
        <FiBookmark className='w-6 h-6 stroke-stone-400' />
        <FiFilter className='w-6 h-6 stroke-stone-400' />
        <FiList className='w-6 h-6 stroke-stone-400' />
        <FiHome className='w-6 h-6 stroke-stone-400' />
        <FiCast className='w-6 h-6 stroke-stone-400' />
        <FiTv className='w-6 h-6 stroke-stone-400'/>
      </div>
    </div>
  )

};

export default Navbar