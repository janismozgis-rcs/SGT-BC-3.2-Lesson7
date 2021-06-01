// import express from 'express';
import { Router } from 'express';
import { storeArticle, getAllArticles } from '../models/Article.js';

// const router = express.Router();
const router = Router();

// GET     https://bloggy.com/articles
// POST    https://bloggy.com/articles             {"description": "foo", "name": "bar", "author": "Johhny"}
// GET     https://bloggy.com/articles/{id}
// PUT     https://bloggy.com/articles/{id}        {"description": "baz", "name": "biz", "author": "Billy"}
// DELETE  https://bloggy.com/articles/{id}

router.get('/', (req, res) => {
    const articles = getAllArticles();
    res.json(articles);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const articles = getAllArticles();
    const article = articles[id];
    if (article) {
        res.json(article);
        return;
    }

    res.status(404).json({error: 'Not found'});
});

router.post('/', (req, res) => {
    storeArticle(req.body);
    res.json({success: true});
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