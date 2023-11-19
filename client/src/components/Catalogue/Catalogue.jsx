import { useEffect, useState } from 'react';
import { getAllGames }  from "../../services/gameService";

import GameListItem from './GamesListItem';

export default function Catalogue() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames()
            .then(result => setGames(result))
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            
            {games.map(game => (
                <GameListItem key={game._id} {...game} />
            ))}

            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}

        </section>
    )
}