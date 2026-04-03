import Navbar from '../components/navbar';
import Hero from '../components/hero';



export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '66px' }}>
        <Hero />
      </main>
    </>
  );
}