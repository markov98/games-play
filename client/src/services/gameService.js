import * as request from "../libreries/request";

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};