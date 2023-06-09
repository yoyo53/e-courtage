module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("Document", {
        Id_Document : {
            type: Sequelize.BINGINT,
            primaryKey: true,
            autoIncrement: true
        },
        Nom_Document : {
            type: Sequelize.STRING
        },
        Type : {
            type: Sequelize.STRING
        },
        Path : {
            type: Sequelize.STRING
        }
    }, {timestamps: false});
    return Document;
};