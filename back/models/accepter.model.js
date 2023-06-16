module.exports = (sequelize, Sequelize) => {
    const Accepter = sequelize.define("accepter", {
        statut: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        id_demande: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_banque: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    }, {timestamps: false});
    return Accepter;
};

