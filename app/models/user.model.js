module.exports = (sequelize, dataType) => {
    const User = sequelize.define("users", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        lastname: {
            type: dataType.STRING,
            allowNull: false
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        },
        quantity: {
            type: dataType.INTEGER,
            allowNull: false
        },
        day: {
            type: dataType.INTEGER,
            allowNull: false
        },
    });

    return User;
};