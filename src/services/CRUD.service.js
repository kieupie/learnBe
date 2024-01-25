const connection = require('../config/database')

const createUser = async (email, name, city) => {
    let [results, fields] = await connection.promise().query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    )
}

const getAllUsers = async () => {
    let [results, fields] = await connection.promise().query(
        `SELECT * FROM Users`
    )
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.promise().query(
        `SELECT * FROM Users 
        WHERE id = ?`, [userId]
    )
    let user = results && results.length > 0 ? results[0] : {}

    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.promise().query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [email, name, city, userId]
    )
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.promise().query(
        `DELETE FROM Users
        WHERE id = ?`,
        [id]
    )
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}