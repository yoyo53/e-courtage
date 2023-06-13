module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        id_client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        date_birth: {
            type: Sequelize.DATE
        },
        tel: {
            type: Sequelize.STRING
        },
        emploi: {
            type: Sequelize.STRING
        },
        revenue: {
            type: Sequelize.INTEGER
        },
        account_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
    return Client;
};