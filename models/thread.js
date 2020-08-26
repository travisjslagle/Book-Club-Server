module.exports = (sequelize, DataTypes) => {
    const Thread = sequelize.define('thread', {
        headline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        originalPost: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isFlagged: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
        },
    })
    return Thread;
}