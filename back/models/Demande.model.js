module.exports = (sequelize, Sequelize) => {
    const Demande = sequelize.define("Demande", {
        Id_Demande : {
            type: Sequelize.BINGINT,
            primaryKey: true,
            autoIncrement: true
        },
        Montant : {
            type: Sequelize.INTEGER
        }
    }, {timestamps: false});
    return Demande;
};