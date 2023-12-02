import * as request from "../libraries/request";

const baseUrl = 'http://localhost:3030/data/games'

export const getAllGames = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getLatestGames = async () => {
    const query = new URLSearchParams({
        sortBy: `_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);
    
    return result;
}

export const getOneGame = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`, );

    return result;
}

export const addGame = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;
};

export const editGame = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData);

    return result;
};

export const deleteGame = async (gameId) => request.remove(`${baseUrl}/${gameId}`);