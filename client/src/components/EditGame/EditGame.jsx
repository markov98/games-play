import { useState, useEffect } from "react"
import useForm from "../../hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { editGame, getOneGame } from "../../services/gameService";

export default function GameEdit() {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const  navigate  = useNavigate();
    const {values, onChange, onSubmit, setValues} = useForm(editGameHandler, {
        'title': '',
        'category': '',
        'maxLevel': '',
        'imageUrl': '',
        'summary': ''
    })

    useEffect(() => {
        getOneGame(gameId)
            .then((gameData) => {
                setGame(gameData);
                return gameData;
            })
            .then((gameData) => {
                setValues({
                    'title': gameData.title,
                    'category': gameData.category,
                    'maxLevel': gameData.maxLevel,
                    'imageUrl': gameData.imageUrl,
                    'summary': gameData.summary
                });
            })
            .catch((error) => {
                alert(error)
            });
    }, [gameId]);

    async function editGameHandler() {
        try {
            await editGame(gameId, values);

            navigate(`/games/${gameId}`);
        } catch (err) {
            // Error notification
            alert(err);
        }
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values['title']} onChange={onChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values['category']} onChange={onChange} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={values['maxLevel']} onChange={onChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values['imageUrl']} onChange={onChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" onChange={onChange} value={values['summary']}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    )
}