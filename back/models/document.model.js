module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
        id_document : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_document : {
            type: Sequelize.STRING,
            allowNull: false
        },
        type : {
            type: Sequelize.STRING,
            allowNull: false
        },
        id_client : {
            type: Sequelize.INTEGER
        }
    }, {timestamps: false});
    return Document;
};
