import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from '@/components/ShowSingleCard';


const SingleCardContainer = ({ id }) => {
  const { show, getShow, showLoading, crew, crewLoading, cast, castLoading, season, seasonLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  return (
    <>
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <ShowSingleCard show={show} crewLoading={crewLoading} crew={crew} cast={cast} castLoading={castLoading} season={season} seasonLoading={seasonLoading}/>}
    </>
  );
};

export default SingleCardContainer;
