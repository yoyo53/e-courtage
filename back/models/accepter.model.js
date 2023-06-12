module.exports = (sequelize, Sequelize) => {
    const Accepter = sequelize.define("Accepter", {
        statut: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {timestamps: false});
    return Accepter;
};

