module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username : {
            type: DataTypes.STRING,
            allowNull: false 
        }
    });


    User.associate = models => {  

            /* ATTENTION ---> ne pas declarer : 
            " ..associate.." pour chaques tables,
                les enfants doivent etre 
                declaré dans le meme bloc sinon
                "Profile is not associated to User!"*/

        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
    };
    

    return User;
};
