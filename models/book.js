module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        authorLast: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        authorFirst: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        createdBy: {
            type: DataTypes.INTEGER,
        },
    })
    return Book;
}