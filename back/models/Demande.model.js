module.exports = (sequelize, Sequelize) => {
    const Demande = sequelize.define("demande", {
        id_demande : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sujet : {
            type: Sequelize.STRING
        },
        montant : {
            type: Sequelize.INTEGER
        },
        duree : {
            type: Sequelize.INTEGER
        },
        raison : {
            type: Sequelize.STRING
        },
        id_client : {
            type: Sequelize.INTEGER
        }
    }, {timestamps: false});
    return Demande;
};