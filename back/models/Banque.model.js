module.exports = (sequelize, Sequelize) => {
    const Banque = sequelize.define("banque", {
        id_banque: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email : {
            type: Sequelize.STRING
        },
        password : {
            type: Sequelize.STRING
        },
        nom_banque : {
            type: Sequelize.STRING
        },
        siren: {
            type: Sequelize.INTEGER
        },
        account_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
    return Banque;
};