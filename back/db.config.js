module.exports = {
    HOST: "e-courtage-db.fly.dev",
    USER: "postgres",
    PASSWORD: "ZqNGswyY0cnZ02W",
    DB: "e-courtage-db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};