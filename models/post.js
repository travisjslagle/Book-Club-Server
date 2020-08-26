module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        threadId: {
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
    return Post;
}