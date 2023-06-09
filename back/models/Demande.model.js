module.exports = (sequelize, Sequelize) => {
    const Demande = sequelize.define("Demande", {
        Id_Demande : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Sujet : {
            type: Sequelize.STRING
        },
        Montant : {
            type: Sequelize.INTEGER
        },
        Duree : {
            type: Sequelize.INTEGER
        },
        Raison : {
            type: Sequelize.STRING
        },
    }, {timestamps: false});
    return Demande;
};