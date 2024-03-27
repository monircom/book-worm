import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Root = () => {
    return (
        <div>
            <div className="container mx-auto mb-20">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;