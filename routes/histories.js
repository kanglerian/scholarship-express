const express = require('express');
const router = express.Router();

const { Histories, Categories, Records } = require('../models');

/* GET categories listing. */
router.get('/', async (req, res) => {
    const { identity_user } = req.query;
    let histories;
    if (identity_user) {
        histories = await Histories.findAll({
            where: {
                identity_user: identity_user,
            },
            include: [
                { model: Categories, as: 'category' }
            ],
        });
    } else {
        histories = await Histories.findAll({
            include: [
                { model: Categories, as: 'category' }
            ],
        });
    }

    return res.status(200).json(histories);
});

/* GET category. */
router.get('/:id', async (req, res) => {
    try {
        const history = await Histories.findByPk(req.params.id);
        return res.status(200).json(history);
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

/* POST history. */
router.post('/', async (req, res) => {
    try {
        await Histories.create(req.body);
        return res.status(201).json({
            message: `Data riwayat berhasil ditambahkan.`
        });
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

/* UPDATE category. */
router.patch('/:id', async (req, res) => {
    try {
        await Histories.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({ message: 'Data riwayat berhasil diubah' });
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

/* DELETE category. */
router.delete('/:identityUser/:categoryId', async (req, res) => {
    try {
        const history = await Histories.destroy({
            where: {
                identity_user: req.params.identityUser,
                category_id: req.params.categoryId
            }
        });
        const record = await Records.destroy({
            where: {
                identity_user: req.params.identityUser,
                category_id: req.params.categoryId
            }
        });
        if (history && record) {
            return res.json({
                message: `Data riyawat pengisian berhasil dihapus.`
            });
        } else {
            return res.status(404).json({
                message: `Data tidak ditemukan.`
            });
        }
    } catch (error) {
        return res.status(500).json({ error: "Terjadi kesalahan pada server." });
    }
});

module.exports = router;
