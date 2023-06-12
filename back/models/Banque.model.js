module.exports = (sequelize, Sequelize) => {
    const Banque = sequelize.define("Banque", {
        Id_Banque: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email : {
            type: Sequelize.STRING
        },
        Password : {
            type: Sequelize.STRING
        },
        Nom_Banque : {
            type: Sequelize.STRING
        },
        Num_Siren: {
            type: Sequelize.INTEGER
        },
        Account_Activated: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
    return Banque;
};