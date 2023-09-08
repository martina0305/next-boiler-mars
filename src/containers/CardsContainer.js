import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <div className="flex flex-wrap col-start-2 col-end-13 w-full">
      <h2 className='w-full'>Shows</h2>
      {!loading && (
        <div className='overflow-x-auto w-full'>
          <div className='inline-flex gap-8'>
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
