const express = require('express');
const router = express.Router();

const { Categories, Questions, Answers } = require('../models');

/* GET categories listing. */
router.get('/', async (req, res) => {
    const categories = await Categories.findAll();
    return res.status(200).json(categories);
});

/* GET category. */
router.get('/:id', async (req, res) => {
    try {
        const category = await Categories.findByPk(req.params.id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

/* POST category. */
router.post('/', async (req, res) => {
    try {
        await Categories.create(req.body);
        return res.status(201).json({
            message: `Data kategori berhasil ditambahkan.`
        });
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

/* UPDATE category. */
router.patch('/:id', async (req, res) => {
    try {
        await Categories.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({ message: 'Data kategori berhasil diubah' });
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

/* DELETE category. */
router.delete('/:id', async (req, res) => {
    try {
        await Categories.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.json({
            message: `Data kategori berhasil dihapus.`
        });
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

module.exports = router;
