module.exports = {
    async up(queryInterface, Sequelize) {
      const attributes = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          title: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
      }
      await queryInterface.createTable('Themes', attributes);
    },
    async down(queryInterface) {
      await queryInterface.dropTable('Themes');
    },
  };