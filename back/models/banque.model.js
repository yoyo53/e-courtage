module.exports = (sequelize, Sequelize) => {
    const Banque = sequelize.define("banque", {
        id_banque: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : {
            type: Sequelize.STRING,
            allowNull: false
        },
        password : {
            type: Sequelize.STRING,
            allowNull: false
        },
        nom_banque : {
            type: Sequelize.STRING,
            allowNull: false
        },
        siret: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        adresse : {
            type: Sequelize.STRING,
            allowNull: false
        },
        ville : {
            type: Sequelize.STRING,
            allowNull: false
        },
        pays : {
            type: Sequelize.STRING,
            allowNull: false
        },
        account_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
    return Banque;
};
