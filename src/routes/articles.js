// import express from 'express';
import { Router } from 'express';
import { storeArticle } from '../models/Article.js';

// const router = express.Router();
const router = Router();

// GET     https://bloggy.com/articles
// POST    https://bloggy.com/articles             {"description": "foo", "name": "bar", "author": "Johhny"}
// GET     https://bloggy.com/articles/{id}
// PUT     https://bloggy.com/articles/{id}        {"description": "baz", "name": "biz", "author": "Billy"}
// DELETE  https://bloggy.com/articles/{id}

router.get('/', (req, res) => {
    res.send('Gets all the articles');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get an article with article ID ${id}`);
});

router.post('/', (req, res) => {
    console.log(req.body);
    storeArticle(req.body);
    res.send('Create a new article');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Edit an article with article ID ${id}`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Delete an article with article ID ${id}`);
});

export default router;