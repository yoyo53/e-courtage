module.exports = (sequelize, Sequelize) => {
    const Contient = sequelize.define("Contient", {
        
    }, {timestamps: false});
    return Contient;
};