module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        id_admin: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        identifiant : {
            type: Sequelize.STRING,
            allowNull: false
        },
        password : {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    return Admin;
};
