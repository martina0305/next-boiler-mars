import SearchNavbar from '@/components/SearchNavbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className='h-screen m-2'>
        <SearchNavbar />
        <HomeContainer/>
        <Footer />
      </div>
    </>
  );
}
