import { useEffect, useState } from "react"
import { getLatestGames } from "../../services/gameService";

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getLatestGames()
            .then(result => setGames(result))
            .catch(err => alert(err));
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {games.map(game => (
                    <div className="game" key={game._id}>
                        <div className="image-wrap">
                            <img src={game.imageUrl} />
                        </div>
                        <h3>{game.name}</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href="#" className="btn details-btn">Details</a>
                        </div>
                    </div>
                ))}

                {games.length === 0 && <p className="no-articles">No games yet</p>}
            </div>
        </section>
    )
}