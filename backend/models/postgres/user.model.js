module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      fullName: { type: DataTypes.STRING },
      organization: { type: DataTypes.STRING },
      role: { type: DataTypes.STRING, defaultValue: "unregistered" },
      title: DataTypes.STRING,
      phone: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  };
  