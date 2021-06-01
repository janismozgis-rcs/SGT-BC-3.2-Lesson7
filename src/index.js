import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import articlesRoutes from './routes/articles.js';

dotenv.config();
const server = express();
server.use(bodyParser.json());

server.use('/articles', articlesRoutes);

server.get('/users', (req, res) => {
    res.send('Hello form users');
});


server.listen(process.env.PORT, () => {
    console.log(`express is up and running on port ${process.env.PORT}`);
})