//componente bonobon, podemos almacenar informacion en un solo componente y desde los otros componentes podemos acceder a la información que tiene uno solo.
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => { //papelito amarillo de bonobon
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [crew, setCrew] = useState([]);
  const [crewLoading, setCrewLoading] = useState(true);
  const [cast, setCast ] = useState([]);
  const [castLoading, setCastLoading] = useState(true);
  const [season, setSeason] = useState([]);
  const [seasonLoading, setSeasonLoading] = useState(true);



  const getShows = useCallback(async () => {
    setLoading(true);
    try {
      const showsReq = await axios.get(
        `https://api.tvmaze.com/shows`
      );
      setShows(showsReq.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getShows();
  }, [getShows]);


  const getShow = useCallback(async (id) => {
    setShowLoading(true);
    try {
      const show = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      console.log(show.data);
      setShow(show.data);
      getCrew(id);
      getCast(id);
      getSeason(id);
      setShowLoading(false);
    } catch (error) {
      console.log('ERRORRR NO EXISTE SHOW');
    }
  }, []);


  const getCrew = useCallback(async (id) => {
    try {
      setCrewLoading(true);
      const crewResponse = await axios.get(`https://api.tvmaze.com/shows/${id}/crew`);
      console.log(crewResponse.data);
      // Process and set crew data as needed
       // Filter the data before setting it in the state variable
      const filteredCrew = crewResponse.data.filter((crewMember) => crewMember.type === "Creator");
      // Set the filtered crew data in the state variable
       setCrew(filteredCrew);
      // For example, you can create a state variable to store crew data:
      //setCrew(crewResponse.data);
      setCrewLoading(false)
    } catch (error) {
      console.log('Error fetching crew data:', error);
    }
  }, []);


  const getCast = useCallback(async (id) => {
    try {
      setCastLoading(true);
      const cast = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
      console.log(cast.data);
      setCast(cast.data);
      setCastLoading(false);
    } catch (error) {
      console.log('Error fetching crew data:', error);
    }
  }, []);


  const getSeason = useCallback(async (id) => {
    try {
      setSeasonLoading(true);
      const season = await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`);
      console.log(season.data);
      setSeason(season.data);
      setSeasonLoading(false);
    } catch (error) {
      console.log('Error fetching crew data:', error);
    }
  }, []);


  return (
    <AppContext.Provider
      value={{
        shows,
        loading,
        getShow,
        show,
        showLoading,
        crewLoading,
        castLoading,
        seasonLoading,
        getCrew,
        crew,
        getCast,
        cast,
        getSeason,
        season,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContexts must be used within a AppContextProvider');
  }
  return context;
};

export default AppContext;
