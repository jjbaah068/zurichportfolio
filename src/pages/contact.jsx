import Navbar from '../components/navbar';
import ContactSection from '../components/contactsection';

export default function Contact() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '66px' }}>
                <ContactSection />
            </main>
        </>
    )
}