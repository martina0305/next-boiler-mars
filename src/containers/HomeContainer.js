import CardsContainer from './CardsContainer';
import Navbar from '@/components/Navbar';

const HomeContainer = () => {
  return (
    <>
    <div className='grid grid-cols-12 gap-8 my-2'>
      <Navbar />
      <CardsContainer />
    </div>
    </>
  );
};

export default HomeContainer;
