module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("Document", {
        Id_Document : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nom_Document : {
            type: Sequelize.STRING
        },
        Id_Client : {
            type: Sequelize.STRING
        }
    }, {timestamps: false});
    return Document;
};