import '../App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <main>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top p-2">
                <Link to='/new' className='navbar-brand text-light'><strong>NEWS READER</strong></Link>
                <Link to='/new' className='nav-link text-light'>NEW</Link>
                <Link to='/archived' className='nav-link text-light'>ARCHIVED</Link>
            </nav>
        </main>
    );
}

export default NavBar