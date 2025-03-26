import pool from "../db/index.js";
import { v4 as uuidv4 } from "uuid";

const createUser = async (name) => {
    const refreshToken = uuidv4();
    await pool.query(`INSERT INTO users (name, refreshToken) VALUES (?, ?);`, [
        name,
        refreshToken,
    ]);

    return { name, refreshToken };
};

export const addUserController = async (req, res, next) => {
    try {
        const { name } = req.body;
        const user = await createUser(name);
        res.cookie("refreshToken", user.refreshToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        }).json({ name: user.name });
    } catch (error) {
        res.status(500).send();
    }
};

