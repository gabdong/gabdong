'use strict';

import express from 'express';

const app   = express();
const port  = 9411;

app.get('/', (req, res) => {
    
    res.send('Hello world');
});

app.listen(port);