module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        id_client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull:false
        },
        genre:{
            type: Sequelize.STRING,
            allowNull: false
        },
        date_birth: {
            type: Sequelize.DATE,
            allowNull: false
        },
        tel: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pays:{
            type: Sequelize.STRING,
            allowNull: false
        },
        ville:{
            type: Sequelize.STRING,
            allowNull: false
        },
        adresse:{
            type: Sequelize.STRING,
            allowNull: false
        },
        status_immo:{
            type: Sequelize.STRING
        },
        situation_professionnelle:{
            type: Sequelize.STRING
        },
        contrat:{
            type: Sequelize.STRING
        },
        poste_depuis:{
            type: Sequelize.DATE
        },
        banque_principale:{
            type: Sequelize.STRING
        },
        situation_familiale:{
            type: Sequelize.STRING
        },
        nationalite:{
            type: Sequelize.STRING
        },
        revenu_mensuel:{
            type: Sequelize.INTEGER
        },
        prime_annuelle:{
            type: Sequelize.INTEGER
        },
        loyer_actuel:{
            type: Sequelize.INTEGER
        },
        account_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
    return Client;
};

// Import bcrypt
import bcrypt, { hash } from "bcrypt";

// Get ALL users
export const getUsers = (result) => {
    db.query("", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single user
export const getUserById = (id, result) => {
    db.query("", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert user in the database
export const insertUser = async (data, result) => {
    // Hash password using bcrypt
    const hash = await bcrypt.hash(data.password, 10);
    data = {
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        password: hash
    };
    db.query("", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update user to Database
// A REFAIRE EN FONCTION DE LA TABLE
export const updateUserById = (data, id, result) => {
    db.query("", [data.email, data.password, data.firstname, data.lastname, data.phoneNumber, data.nbBooking, data.isLogged, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete user to Database
export const deleteUserById = (id, result) => {
    db.query("", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
