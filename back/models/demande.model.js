module.exports = (sequelize, Sequelize) => {
    const Demande = sequelize.define("demande", {
        id_demande : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sujet : {
            type: Sequelize.STRING,
            allowNull: false
        },
        nature : {
            type: Sequelize.STRING,
            allowNull: false
        },
        type : {
            type: Sequelize.STRING,
            allowNull: false
        },
        age : {
            type: Sequelize.STRING,
            allowNull: false
        },
        usage : {
            type: Sequelize.STRING,
            allowNull: false
        },
        status_recherche : {
            type: Sequelize.STRING,
            allowNull: false
        },
        pays : {
            type: Sequelize.STRING,
            allowNull: false
        },
        ville : {
            type: Sequelize.STRING,
            allowNull: false
        },
        montant_bien : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        montant_travaux : {
            type: Sequelize.INTEGER
        },
        frais_notaire : {
            type: Sequelize.INTEGER
        },
        apport_personnel : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        accompagnement:{
            type: Sequelize.STRING
        },
        id_client : {
            type: Sequelize.INTEGER
        }
    }, {timestamps: false});
    return Demande;
};
