'use strict';

import express from 'express';
import { pool } from './database.js';
import cors from 'cors';

const app   = express();
const port  = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get('/', (req, res) => {

    res.send('Hello world');
});

app.listen(port, () => {

    console.log('Node is start');
});

app.post('/create', async (req, res) => {

    try {
        let { content } = req.body;
        console.log(req.body);

        const conn  = await pool.getConnection();
        let sql     = 'INSERT INTO todo_list (content) VALUES (?)';
        let data    = [ content ];
        console.log(data);

        const [rows] = await pool.query(sql, data);
        res.status(200).json({result : rows});
        conn.release();
    } catch(error) {

        console.log(error);
    }
});