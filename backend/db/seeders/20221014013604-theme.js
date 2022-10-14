module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Ни о чём',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Disney',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Эльбрус News',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
