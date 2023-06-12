module.exports = (sequelize, Sequelize) => {
    const SessionClient = sequelize.define("SessionClient", {
        Id_SessionClient: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
    return SessionClient;
};