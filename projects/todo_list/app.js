'use strict';

import express from 'express';
import { pool } from './database.js';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();
const app       = express();
const port      = 8080;

//g DB
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//g public
app.use(express.static('public'));
app.use(express.static('D:\\gabdong_workspace\\gabdong\\css\\common.css'));
app.use(express.static('D:\\gabdong_workspace\\gabdong\\js\\common.js'));
app.use(express.static(path.join(__dirname + 'index.html')));

app.get('/', (req, res) => {

    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.send('Hello world');
});

app.listen(port, () => {

    console.log(`Node is start : ${port}`);
});

//g todo create
app.post('/create', async (req, res) => {

    try {
        let { content } = req.body;
        console.log(req.body);

        const conn  = await pool.getConnection();
        let sql     = 'INSERT INTO todo_list (content) VALUES (?)';
        let data    = [ content ];
        console.log(data);

        const [ rows ] = await pool.query(sql, data);
        res.status(200).json({result : rows});
        conn.release();
    } catch(error) {

        console.log(error);
    }
});