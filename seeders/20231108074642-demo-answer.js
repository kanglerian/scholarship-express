'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        question_id: 1,
        answer: "Rp135.000",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 1,
        answer: "Rp140.000",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 1,
        answer: "Rp145.000",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 1,
        answer: "Rp130.000",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 2,
        answer: "2 jam",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 2,
        answer: "4 jam",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 2,
        answer: "6 jam",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 2,
        answer: "8 jam",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 3,
        answer: "26",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 3,
        answer: "28",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 3,
        answer: "33",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 3,
        answer: "30",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 4,
        answer: "Rp2.800.000",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 4,
        answer: "Rp2.880.000",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 4,
        answer: "Rp3.000.000",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 4,
        answer: "Rp3.200.000",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 5,
        answer: "10 hari",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 5,
        answer: "12 hari",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 5,
        answer: "14 hari",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 5,
        answer: "12 hari",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 6,
        answer: "30 siswa",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 6,
        answer: "25 siswa",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 6,
        answer: "24 siswa",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 6,
        answer: "20 siswa",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 7,
        answer: "10",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 7,
        answer: "20",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 7,
        answer: "25",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 7,
        answer: "30",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 8,
        answer: "1 kue",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 8,
        answer: "1,5 kue",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 8,
        answer: "2 kue",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 8,
        answer: "2,5 kue",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 9,
        answer: "50%",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 9,
        answer: "65%",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 9,
        answer: "70%",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 9,
        answer: "75%",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 10,
        answer: "4 hari",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 10,
        answer: "5 hari",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 10,
        answer: "7 hari",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 10,
        answer: "8 hari",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 11,
        answer: "Plentiful",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 11,
        answer: "Scarce",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 11,
        answer: "Rare",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 11,
        answer: "Minimal",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 12,
        answer: "Went",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 12,
        answer: "Goes",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 12,
        answer: "Going",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 12,
        answer: "Go",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 13,
        answer: "Children",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 13,
        answer: "Childs",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 13,
        answer: "Childes",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 13,
        answer: "Childrens",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 14,
        answer: "Adjective",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 14,
        answer: "Verb",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 14,
        answer: "Noun",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 14,
        answer: "Preposition",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 15,
        answer: "She go to school.",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 15,
        answer: "She goes to school.",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 15,
        answer: "She going to school.",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 15,
        answer: "She gone to school.",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 16,
        answer: "Better",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 16,
        answer: "Good",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 16,
        answer: "More good",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 16,
        answer: "Best",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 17,
        answer: "Placed",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 17,
        answer: "Puts",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 17,
        answer: "Put",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 17,
        answer: "Placing",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 18,
        answer: "Went",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 18,
        answer: "Goes",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 18,
        answer: "Going",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 18,
        answer: "Go",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 19,
        answer: "Easy",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 19,
        answer: "Hard",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 19,
        answer: "Tough",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 19,
        answer: "Complicated",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 20,
        answer: "An",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 20,
        answer: "A",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 20,
        answer: "The",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question_id: 20,
        answer: "No article",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
