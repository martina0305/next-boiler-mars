import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <div className="flex flex-wrap col-start-2 col-end-4 w-full md:col-end-9 sm:col-end-5 xl:col-end-13">
      <div className='w-full flex flex-col items-start'>
        <h2 className='font-light text-base text-white tracking-wide m-0 pb-4'>Principal</h2>
        <h3 className='text-xl font-bold text-white tracking-wide'>Continuar viendo</h3>
      </div>
      {!loading && (
        <div className='overflow-x-auto w-full h-screen mt-7'>
          <div className='w-full inline-flex gap-8'>
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
          </div>
        </div>
      )}
      {loading && <p className='w-full flex justify-center'>Loading...</p>}
    </div>
  );
};

export default CardsContainer;
