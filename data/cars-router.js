const express = require('express');
const db = require('./dbConfig');
const router = express.Router();


router.get('/',(req, res) => {

    db('car-dealer')
        .then(table => {
            console.log(table);
            res.json(table);

        })
        .catch(({ message }) => {
            res.status(500).json({ message });
        })

});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('car-dealer').where({ id })
        .then(tables => {
            const table = tables[0];
            if (table) {
                res.json(table)
            } else {
                res.status(404).json({ message: 'invalid ID' })
            }
        })
        .catch(({ message }) => {
            res.status(500).json({ message });
        })
});

router.post('/', (req, res) => {
    const tableData = req.body;
    db('car-dealer').insert(tableData)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(({ message }) => {
            res.status(500).json({ message });
        })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;