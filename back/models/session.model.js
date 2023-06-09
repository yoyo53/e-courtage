module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define("session", {
        token: {
            type: Sequelize.STRING
        },
        validUntil: {
            type: Sequelize.DATE
        },
        Id_Client: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });
    return Session;
};