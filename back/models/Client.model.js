module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("Client", {
        Id_Client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nom: {
            type: Sequelize.STRING
        },
        Prenom: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        },
        Tel: {
            type: Sequelize.STRING
        },
        Emploi: {
            type: Sequelize.STRING
        },
        Revenue: {
            type: Sequelize.INTEGER
        }
    }, {timestamps: false});
    return Client;
};