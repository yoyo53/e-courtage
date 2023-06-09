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
        Id_Client : {
            type: Sequelize.INTEGER
        }
    }, {timestamps: false});
    return Demande;
};