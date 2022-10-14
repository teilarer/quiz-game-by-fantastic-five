module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      theme_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      content: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      answer: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.createTable('Questions',attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Questions');
  },
};
