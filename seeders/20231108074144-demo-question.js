'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        category_id: 1,
        question: "Sebuah toko buku memberikan diskon 10% untuk setiap buku yang dibeli. Jika harga asli sebuah buku adalah Rp150.000, berapa harga setelah diskon?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Jika Andi mengendarai mobil dari kota A ke kota B dengan kecepatan rata-rata 60 km/jam dan menempuh jarak 240 km, berapa lama waktu yang dibutuhkan Andi untuk sampai di kota B?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Tiga buah angka membentuk suatu barisan, yaitu 5, 12, dan 19. Jika pola tersebut berlanjut, berapakah angka ke-5 dari barisan tersebut?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Sebuah perusahaan mengalami peningkatan laba sebesar 20% setiap tahun. Jika tahun ini laba perusahaan adalah Rp2.000.000, berapakah laba perusahaan dua tahun kemudian?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Jika 6 orang dapat menyelesaikan sebuah pekerjaan dalam 8 hari, berapa lama waktu yang dibutuhkan oleh 4 orang untuk menyelesaikan pekerjaan yang sama?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Dalam sebuah kelas, terdapat 60% siswa perempuan. Jika jumlah siswa perempuan adalah 18 orang, berapakah jumlah total siswa di kelas tersebut?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Sebuah angka bulat ditambahkan dengan 15 dan hasilnya adalah 35. Berapakah angka tersebut?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Rina memiliki 3 buah kue dan memberikan setengah dari semua kue tersebut kepada temannya. Berapa jumlah kue yang diberikan Rina?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Seorang siswa memperoleh nilai 75 dari maksimal 100 pada ujian. Berapakah persentase nilai yang diperoleh siswa tersebut?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 1,
        question: "Suatu pekerjaan dapat diselesaikan dalam 10 hari oleh 5 pekerja. Jika dua pekerja lagi ditambahkan, berapa hari pekerjaan tersebut akan selesai?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Which of the following words is the synonym of 'abundant'?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Choose the correct form of the verb: 'He _____ to the store yesterday.'",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "What is the correct plural form of 'child'?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Identify the part of speech: 'The quick brown fox jumps over the lazy dog.'",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Which sentence is grammatically correct?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Fill in the blank: 'The weather is _____ today than it was yesterday.'",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Which word best completes this sentence: 'She _____ the book on the table.'",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "What is the past tense of the verb 'go'?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Which word is an antonym of 'difficult'?",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        category_id: 2,
        question: "Choose the correct article: '_____ apple a day keeps the doctor away.'",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
