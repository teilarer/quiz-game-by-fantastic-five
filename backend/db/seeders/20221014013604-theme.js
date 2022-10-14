module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Кино',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Логика',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'География',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
