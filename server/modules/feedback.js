const express = require('express');
const router = express.Router();
const pg = require('pg');



const pool = pg.Pool({
    host: 'localhost',              //Where is your database?
    port: 5432,                     //What port is your database on? (Almost always 5432).
    database: 'feedback',              //The name of your database.
    max: 10,                        //How many connestions (Quieries) can be used at the same time.
    idleTimeoutMillis: 30000        //30 seconds before request times out.
});

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";').then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log('GET error:', error);
        res.send(500);
    });
});

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [requ.body.feeling, req.body.understanding, req.body.supported, req.body.comment])
.then((response) => {
    console.log('DB response:', response);
    res.send(200);
}).catch((error) => {
    console.log('DB error:', error);
    res.send(500);
  })
})