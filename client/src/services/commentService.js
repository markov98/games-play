import * as request from '../libraries/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAllComments = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const createComment = async (gameId, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        text,
    });

    return newComment;
};