const express = require('express');
const router = express.Router();

const { Questions, Categories, Answers } = require('../models');

/* GET questions listing. */
router.get('/', async (req, res) => {
  const { category } = req.query;
  let questions;
  if (category) {
    questions = await Questions.findAll({
      where: {
        category_id: category,
      },
      include: [
        { model: Categories, as: 'category' }
      ],
    });
  } else {
    questions = await Questions.findAll({
      include: [
        { model: Categories, as: 'category' }
      ],
    });
  }

  return res.status(200).json(questions);
});

/* GET question. */
router.get('/:id', async (req, res) => {
  try {
    const category = await Questions.findByPk(req.params.id, {
      include: [
        { model: Categories, as: 'category' }
      ],
    });
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* POST question. */
router.post('/', async (req, res) => {
  try {
    const question = await Questions.create(req.body);
    return res.status(201).json({
      message: `Data pertanyaan berhasil ditambahkan.`,
      id: question.id
    });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* UPDATE question. */
router.patch('/:id', async (req, res) => {
  try {
    await Questions.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({ message: 'Data pertanyaan berhasil diubah.' });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* DELETE question. */
router.delete('/:id', async (req, res) => {
  try {
    const question = await Questions.destroy({
      where: {
        id: req.params.id
      }
    });
    await Answers.destroy({
      where: {
        question_id: req.params.id
      }
    });
    if (question) {
      return res.json({
        message: `Data pertanyaan berhasil dihapus.`,
      });
    } else {
      return res.status(404).json({
        message: `Data pertanyaan tidak ditemukan.`
      });
    }
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

module.exports = router;
