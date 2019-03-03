const express = require('express');
const router = express.Router();


const feedback = require('./feedbackstore');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";').then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log('GET error:', error);
    });
});

router.post('/', (req, res) => {
    pool.query()
})