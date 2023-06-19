module.exports = (sequelize, Sequelize) => {
    const SessionAdmin = sequelize.define("sessionadmin", {
        id_sessionadmin: {
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
        id_admin: {
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });
    return SessionAdmin;
};