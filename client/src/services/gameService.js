import * as request from "../libraries/request";

const baseUrl = 'http://localhost:3030/data/games'

export const getAllGames = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOneGame = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`, );

    return result;
}

export const addGame = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;
};