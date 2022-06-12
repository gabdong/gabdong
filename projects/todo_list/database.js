'use strict';

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import exp from 'constants';

dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const dbConfig = {
    connectionLimit : 10,
    host            : DB_HOST,
    user            : DB_USER,
    password        : DB_PASSWORD,
    database        : DB_DATABASE,
    port            : DB_PORT
};

const pool = mysql.createPool(dbConfig);

export { pool };