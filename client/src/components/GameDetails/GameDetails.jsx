import { useContext, useEffect, useState } from "react";
import { useParams , Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { deleteGame, getOneGame } from "../../services/gameService";
import { getAllComments, createComment } from "../../services/commentService";
import { AuthContext } from "../../contexts/authContext";

export default function GameDetails() {
    const { email, userId } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    const { values, onChange, onSubmit } = useForm(addCommentHandler, { 'comment:': '' });
    const navigate = useNavigate();

    async function addCommentHandler(e) {
        const newComment = await createComment(
            gameId,
            values['comment']
        );

        setComments(state => [...state, { ...newComment, owner: { email } }]);
    }

    async function deleteGameHandler() {
        if (confirm('Do you want to delete this game?')) {
            try {
                await deleteGame(gameId);
                navigate('/catalogue');
            } catch (err) {
                alert(err);
            }
        }
    }

    useEffect(() => {
        getOneGame(gameId)
            .then(setGame);

        getAllComments(gameId)
            .then(setComments);
    }, [gameId]);

    const isOwner = userId === game._ownerId;

    const paths = {
        edit: `/games/${gameId}/edit`,
        delete: `/games/${gameId}/delete`
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, owner, text }) => (
                            <li key={_id} className="comment">
                                <p>{owner.email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {isOwner ?
                <div className="buttons">
                    <Link to={paths.edit} className="button">Edit</Link>
                    <Link onClick={deleteGameHandler} className="button">Delete</Link>
                </div> : null}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" placeholder="Comment......" onChange={onChange}>{values['comment']}</textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}