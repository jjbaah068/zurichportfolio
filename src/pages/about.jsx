import Navbar from '../components/navbar';
import AboutSection from '../components/aboutsection';

export default function About() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '66px' }}>
                <AboutSection />
            </main>
        </>
    )
}