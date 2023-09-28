import CardsContainer from './CardsContainer';
import Navbar from '@/components/Navbar';

const HomeContainer = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-8 my-2 h-screen md:grid-cols-8 sm:grid-cols-4 lg:grid-cols-10 xl:grid-cols-12'>
      <Navbar />
      <CardsContainer />
    </div>
    </>
  );
};

export default HomeContainer;
