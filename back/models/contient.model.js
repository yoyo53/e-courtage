module.exports = (sequelize, Sequelize) => {
    const Contient = sequelize.define("contient", {
        id_document: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_demande: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        }
        
    }, {timestamps: false});
    return Contient;
};