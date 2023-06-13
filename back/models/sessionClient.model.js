module.exports = (sequelize, Sequelize) => {
    const SessionClient = sequelize.define("sessionclient", {
        id_sessionclient: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        token: {
            type: Sequelize.STRING
        },
        valid_until: {
            type: Sequelize.DATE
        },
        id_client: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });
    return SessionClient;
};