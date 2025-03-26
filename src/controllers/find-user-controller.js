import pool from "../db/index.js";

const findUser = async (refreshToken) => {
    return pool.query("SELECT name FROM users WHERE refreshToken = ?", [
        refreshToken,
    ]);
};

const handlerResult = (result, res) => {
    if (result.length) {
        res.send(result[0]);
    } else {
        res.status(404).send();
    }
};

export const FindUserController = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    const [result] = await findUser(refreshToken, res);

    handlerResult(result, res);
};
