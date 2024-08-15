const express = require("express");
const router = express.Router();

const { Records, Questions, Answers, Categories } = require("../models");

/* GET records listing. */
router.get("/", async (req, res) => {
  const { identity_user } = req.query;
  const { category } = req.query;
  let records;
  if (identity_user && category) {
    records = await Records.findAll({
      where: {
        identity_user: identity_user,
        category_id: category
      },
      include: [
        {
          model: Questions,
          as: "question",
          include: [
            { model: Categories, as: 'category' }
          ],
        },
        { model: Answers, as: "answer" }
      ],
    });
  } else {
    records = await Records.findAll({
      include: [
        { model: Questions, as: "question" },
        { model: Answers, as: "answer" },
      ],
    });
  }
  return res.status(200).json(records);
});

/* GET record. */
router.get("/:id", async (req, res) => {
  try {
    const record = await Records.findByPk(req.params.id, {
      include: [
        { model: Questions, as: "question" },
        { model: Answers, as: "answer" },
      ],
    });
    return res.status(200).json(record);
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* POST record. */
router.post("/", async (req, res) => {
  try {
    await Records.create(req.body);
    return res.status(201).json({
      message: `Data jawaban siswa berhasil ditambahkan.`,
    });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* UPDATE record. */
router.patch("/:id", async (req, res) => {
  try {
    await Records.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res
      .status(200)
      .json({ message: "Data jawaban siswa berhasil diubah." });
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

/* DELETE record. */
router.delete("/:id", async (req, res) => {
  try {
    const record = await Records.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (record) {
      return res.json({
        message: `Data jawaban siswa berhasil dihapus.`,
      });
    } else {
      return res.status(404).json({
        message: `Data jawaban siswa tidak ditemukan.`,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: "Terjadi kesalahan pada server." });
  }
});

module.exports = router;
