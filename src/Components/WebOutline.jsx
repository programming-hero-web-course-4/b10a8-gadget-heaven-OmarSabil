import { Outlet } from 'react-router-dom';
import NavBar from './Top/NavBar';
import FooterContent from './Bottom/Footer'

const WebOutline = () => {
    return (
        <div className='max-w-[1300px] w-full mx-auto relative'>
            {/* Header */}
            <header><NavBar /></header>
            {/* Main */}
            <main><Outlet></Outlet></main>
            {/* Footer */}
            <footer><FooterContent></FooterContent></footer>
        </div>
    );
};

export default WebOutline;