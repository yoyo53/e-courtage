module.exports = (sequelize, Sequelize) => {
    const Contient = sequelize.define("contient", {
        
    }, {timestamps: false});
    return Contient;
};