const fs = require('fs').promises;

async function seedCards() {
  const cards = await fs.readFile('fixtures/cards.txt', 'utf-8');
  const arrCards = cards.split('\n');
  const loadCards = arrCards.reduce((acc, el) => {
    const oneCard = el.split(', ');
    acc.push(oneCard);
    return acc;
  }, []);
  const result = loadCards.map((el) => ({
    theme: el[0],
    points: el[1],
    question: el[2],
    answer: el[3],
    status: 'true',
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  result.pop();
  return result;
}

module.exports = {
  async up(queryInterface) {
    const final = await seedCards();
    await queryInterface.bulkInsert('Cards', final, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
