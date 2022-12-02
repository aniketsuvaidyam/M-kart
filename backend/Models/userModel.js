require("../Connection/connectionDB");
module.exports = ((sequelize, type) => {
  const Users = sequelize.define(
    "user",
    {
      id: {
        type: type.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: type.STRING(50),
        require: [true, "Plese Enter Your Name"],
      },
      email: {
        type: type.STRING(40),
        require: [true, "Plese Enter Your Email"],
      },
      gender: {
        type: type.STRING(40),
        require: [true, "Plese Enter Your Gender"],
        values: ["1", "2"],
        comment: ` 1: male 2 : female`,
      },
      password: {
        type: type.STRING(30),
        require: [true, "Plese Enter Your Password"],
      },
      avatar: {
        type: type.STRING(300),
        require: true,
      },

      role: {
        type: type.STRING(11),
        require: true,
        defaultValue: "2",
        values: ["1", "2"],
        comment: ` 1: admin 2 : user`,
      },
      is_deleted: {
        type: type.ENUM,
        defaultValue: "1",
        values: ["0", "1", "2"],
        comment: `0: Inactive 1: Active 2 : Delete`,
      },
      created_at: {
        type: type.DATE,
        defaultValue: type.NOW,
      },
      updated_at: {
        type: type.DATE,
        defaultValue: type.NOW,
      },
      is_deleted_by: {
        type: type.INTEGER(11),
      },
      deleted_at: {
        type: type.DATE,
      },
      created_by: {
        type: type.INTEGER(11),
      },
      updated_by: {
        type: type.INTEGER(11),
      },
    },
    { freezeTimeName: true, timestamps: false }
  );
  return Users;
})(sequelize, Sequelize);
