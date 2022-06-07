'use strict';

import mysql from 'mysql2';
import dotenv from 'dotenv';
import exp from 'constants';

dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const dbConfig = {
    connectionLimit : 10,
    host            : DB_HOST,
    user            : DB_USER,
    password        : DB_PASSWORD,
    database        : DB_DATABASE
};

const pool = mysql.createPool(dbConfig);

export { pool };