import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

export default function Header() {
    const { isAuthencticated } = AuthContext;

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/catalogue">All games</Link>
                {isAuthencticated ?
                    <div id="user">
                        <Link to="/add-game">Create Game</Link>
                        <Link to="#">Logout</Link>
                    </div> :
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>}
            </nav>
        </header>
    )
}