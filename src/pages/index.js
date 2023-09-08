import SearchNavbar from '@/components/SearchNavbar';
import HomeContainer from '@/containers/HomeContainer';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className='h-auto m-2'>
        <SearchNavbar />
        <HomeContainer/>
        <Footer />
      </div>
    </>
  );
}
