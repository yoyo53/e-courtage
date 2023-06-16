/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);

/* END db initialization */
const { getUsers, getUserById, insertUser, updateUserById, deleteUserById } = require("../models/userModel.js");

// Get All users
export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single user 
export const showUserById = (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New user
export const createUser = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update User
export const updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete User
export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
