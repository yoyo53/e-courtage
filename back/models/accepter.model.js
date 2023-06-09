module.exports = (sequelize, Sequelize) => {
    const Accepter = sequelize.define("Accepter", {
        accepter: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, {timestamps: false});
    return Accepter;
};

