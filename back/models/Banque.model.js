module.exports = (sequelize, Sequelize) => {
    const Banque = sequelize.define("Banque", {
        Id_Banque: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nom_Banque : {
            type: Sequelize.STRING
        },
        Num_Siren: {
            type: Sequelize.INTEGER
        },
        Password : {
            type: Sequelize.STRING
        }
    }, {timestamps: false});
    return Banque;
};