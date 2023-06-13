module.exports = (sequelize, Sequelize) => {
    const Accepter = sequelize.define("accepter", {
        statut: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {timestamps: false});
    return Accepter;
};

