import { FiCompass, FiFilm, FiBookmark, FiFilter, FiList, FiHome, FiCast, FiAirplay, FiTv } from 'react-icons/fi';

const Navbar = () =>{
  return(
    <div className='flex justify-center'>
      <div className='flex flex-col gap-8'>
        <FiCompass className='w-6 h-6 stroke-stone-400 hover:stroke-white'/>
        <FiFilm className='w-6 h-6 stroke-stone-400 hover:stroke-white' />
        <FiBookmark className='w-6 h-6 stroke-stone-400 hover:stroke-white' />
        <FiFilter className='w-6 h-6 stroke-stone-400 hover:stroke-white' />
        <FiList className='w-6 h-6 stroke-stone-400 hover:stroke-white' />
        <FiHome className='w-6 h-6 stroke-stone-400 hover:stroke-white' />
        <FiCast className='w-6 h-6 stroke-stone-400 hover:stroke-white' />
        <FiTv className='w-6 h-6 stroke-stone-400 hover:stroke-white'/>
      </div>
    </div>
  )

};

export default Navbar