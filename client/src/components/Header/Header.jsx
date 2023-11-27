import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/authContext';

export default function Header() {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/catalogue">All games</Link>
                {isAuthenticated ?
                    <div id="user">
                        <Link to="/add-game">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                        <span>Welcome, {username}!</span>
                    </div> :
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>}
            </nav>
        </header>
    )
}