import pool from "../db/index.js";

const createUser = async (name) => {
    const [result] = await pool.query(`INSERT INTO users (name) VALUES (?);`, [
        name,
    ]);

    return `${result.insertId}_${name}`;
};

export const userController = async (req, res, next) => {
    try {
        const { name } = req.body;
        const user = await createUser(name);
        res.json({ user });
    } catch (error) {
        res.status(500).send();
    }
};
