module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isResolved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        resolveComment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Task;
}