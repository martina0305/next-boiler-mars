import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const SearchNavbar = () => {
  return (
    <div className='col-span-full rounded flex justify-between items-center h-14 bg-neutral-900/80 px-5 mb-6'>
      <div className=' w-32 h-auto sm:w-36 md:w-[300px]'>
        <Image src={`/assets/plex_logo.png`} width={62} height={28} alt={`Logo`} />
      </div>
      <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-4'>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#ffffff`} />
      </div>
    </div>
  );
};

export default SearchNavbar;