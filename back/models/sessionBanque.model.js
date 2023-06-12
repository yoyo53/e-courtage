module.exports = (sequelize, Sequelize) => {
    const SessionBanque = sequelize.define("SessionBanque", {
        Id_SessionBanque: {
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
        Id_Banque: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });
    return SessionBanque;
};