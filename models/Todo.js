module.exports = (sequalize, DataTypes) => {
    const Todo = sequalize.define("Todo", {
        text : {
            type : DataTypes.STRING,
            allowNull : false
        }
    });
    return Todo;
};