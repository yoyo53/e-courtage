module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        id_client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenom: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull:false
        },
        genre:{
            type: Sequelize.STRING,
            allowNull: false
        },
        date_birth: {
            type: Sequelize.DATE,
            allowNull: false
        },
        tel: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pays:{
            type: Sequelize.STRING,
            allowNull: false
        },
        ville:{
            type: Sequelize.STRING,
            allowNull: false
        },
        adresse:{
            type: Sequelize.STRING,
            allowNull: false
        },
        status_immo:{
            type: Sequelize.STRING
        },
        situation_professionnelle:{
            type: Sequelize.STRING
        },
        contrat:{
            type: Sequelize.STRING
        },
        poste_depuis:{
            type: Sequelize.DATE
        },
        banque_principale:{
            type: Sequelize.STRING
        },
        situation_familiale:{
            type: Sequelize.STRING
        },
        nationalite:{
            type: Sequelize.STRING
        },
        revenu_mensuel:{
            type: Sequelize.INTEGER
        },
        prime_annuelle:{
            type: Sequelize.INTEGER
        },
        loyer_actuel:{
            type: Sequelize.INTEGER
        },
        account_status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
    return Client;
};
