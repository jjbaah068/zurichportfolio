import Navbar from '../components/navbar';
import ProjectsSection from '../components/projectsection';

export default function Projects() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '66px' }}>
                <ProjectsSection />
            </main>
        </>
    )
}