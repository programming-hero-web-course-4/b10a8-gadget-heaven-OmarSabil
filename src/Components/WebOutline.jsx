import { Outlet } from 'react-router-dom';
import NavBar from './Top/NavBar';
import FooterContent from './Bottom/Footer'

const WebOutline = () => {
    return (
        <div>
            {/* Header */}
            <header><NavBar></NavBar></header>
            {/* Main */}
            <main><Outlet></Outlet></main>
            {/* Footer */}
            <footer><FooterContent></FooterContent></footer>
        </div>
    );
};

export default WebOutline;