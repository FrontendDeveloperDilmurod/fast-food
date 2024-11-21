
import { Outlet } from 'react-router-dom';
import Nav from './../components/Nav';
import Footer from './../components/Footer';

function RootLayout({ setShowLogin }) {
    return (
        <div className='pt-2 '>
            <Nav setShowLogin={setShowLogin} />
            <main className="max-w-[1320px] mx-auto pt-2">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
