module.exports = (sequelize, Sequelize) => {
    const SessionBanque = sequelize.define("sessionbanque", {
        id_sessionbanque: {
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
        id_banque: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });
    return SessionBanque;
};