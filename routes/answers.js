const express = require('express');
const router = express.Router();

const { Answers, Questions, Categories } = require('../models');

/* GET answers listing. */
router.get('/', async (req, res) => {
  const answers = await Answers.findAll({
    include: [
      {
        model: Questions,
        as: "question",
        include: [
          { model: Categories, as: 'category' }
        ],
      },
    ]
  });
  return res.status(200).json(answers);
});

/* GET answer. */
router.get('/:id', async (req, res) => {
  try {
    const answer = await Answers.findByPk(req.params.id, {
      include: [
        {
          model: Questions,
          as: "question",
          include: [
            { model: Categories, as: 'category' }
          ],
        },
      ]
    });
    return res.status(200).json(answer);
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* GET anwer. */
router.get('/question/:id', async (req, res) => {
  try {
    const answer = await Answers.findAll({
      where: {
        question_id: req.params.id
      },
      include: [
        {
          model: Questions,
          as: "question",
          include: [
            { model: Categories, as: 'category' }
          ],
        },
      ]
    });
    return res.status(200).json(answer);
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* POST answer. */
router.post('/', async (req, res) => {
  try {
    await Answers.create(req.body);
    return res.status(201).json({
      message: `Data jawaban berhasil ditambahkan.`
    });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* UPDATE answer. */
router.patch('/:id', async (req, res) => {
  try {
    await Answers.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({ message: 'Data jawaban berhasil diubah' });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* DELETE answer. */
router.delete('/:id', async (req, res) => {
  try {
    const answer = await Answers.destroy({
      where: {
        id: req.params.id
      }
    });
    if (answer) {
      return res.json({
        message: `Data jawaban berhasil dihapus.`
      });
    } else {
      return res.status(404).json({
        message: `Data jawaban tidak ditemukan.`
      });
    }
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

module.exports = router;