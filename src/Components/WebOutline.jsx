import { Outlet } from 'react-router-dom';
import NavBar from './Top/NavBar';
import FooterContent from './Bottom/Footer'
import setFavIcon from '../utilities/favIcon';

const WebOutline = () => {
    setFavIcon('https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/439929576_465970152448500_7851034487459575141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1mtxOViITo32sRWiioWNoMUq0Q0lDdG0xSrRDSUN0bV90n38QtVLx660DYs9o5ObwfxEUauOKRGoInwxXSUOs&_nc_ohc=4uA9XHYAJroQ7kNvgGwpoKX&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=AnXwdplnHtcNlEhraTNGrNc&oh=00_AYDjBm2FsVtZt1Cdnban1l8HTLJEIXOxvFGmvFwqPWzfeA&oe=67329CEF')
    return (
        <div className='bg-gray-100'>
            {/* Header */}
            <header><NavBar /></header>
            {/* Main */}
            <main><Outlet/></main>
            {/* Footer */}
            <footer><FooterContent/></footer>
        </div>
    );
};

export default WebOutline;