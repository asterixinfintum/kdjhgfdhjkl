import express from 'express';

import Article from '../models/article';

import Agent from '../../models/admin';

import authenticateToken from '../../utils/authenticateToken';

const articleRoute = express.Router();

articleRoute.post('/admin/article/post', authenticateToken, async (req, res) => {
    try {
        const article = new Article(req.body);
        await article.save();
        res.status(201).json(article);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

articleRoute.get('/admin/articles/get', authenticateToken, async (req, res) => {
    try {
        const { article_type } = req.query;

        if (article_type !== undefined) {
            if (['announcement', 'news', 'blogpost', 'projects', 'launchprogram'].includes(article_type)) {
                const articles = await Article.find({ type: article_type });
                res.status(200).json(articles);
            } else {
                res.status(400).json({ message: 'Invalid article type' });
            }
        } else {
            const articles = await Article.find();
            res.status(200).json(articles);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

articleRoute.get('/admin/article/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findById(id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json(article);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

articleRoute.post('/admin/article/update', authenticateToken, async (req, res) => {
    try {
        const articleId = req.query.article_id;
        const articleData = req.body;

        if (!articleId || !articleData) {
            return res.status(400).json({ message: 'Invalid request' });
        }

        const article = await Article.findById(articleId);

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        article.header = articleData.header;
        article.subheader = articleData.subheader;
        article.type = articleData.type;
        article.content = articleData.content;

        await article.save();

        res.json({ message: 'Article updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

articleRoute.put('/admin/articles/hide', authenticateToken, async (req, res) => {
    try {
        const { article_id } = req.query;
        if (!article_id) {
            res.status(400).json({ message: 'Article ID is required' });
            return;
        }

        const article = await Article.findById(article_id);
        if (!article) {
            res.status(404).json({ message: 'Article not found' });
            return;
        }

        article.hidden = true;
        await article.save();
        res.status(200).json({ message: 'Article hidden successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

articleRoute.put('/admin/articles/unhide', authenticateToken, async (req, res) => {
    try {
        const { article_id } = req.query;
        if (!article_id) {
            res.status(400).json({ message: 'Article ID is required' });
            return;
        }

        const article = await Article.findById(article_id);
        if (!article) {
            res.status(404).json({ message: 'Article not found' });
            return;
        }

        article.hidden = false;
        await article.save();
        res.status(200).json({ message: 'Article unhidden successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

articleRoute.get('/article/articles', async (req, res) => {
    try {
        const allowedTypes = ['announcement', 'news', 'blogpost', 'projects', 'launchprogram'];
        const type = req.query.type;

        if (type && !allowedTypes.includes(type)) {
            return res.status(400).json({ message: 'Invalid article type' });
        }

        let query = { hidden: false };

        if (type) {
            query = { ...query, type: type };
        }

        const articles = await Article.find(query).sort({ date: -1 });
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

articleRoute.get('/article/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.findById(id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.json(article);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

articleRoute.put('/admin/article/:id', authenticateToken, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedArticle = await Article.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedArticle) return res.status(404).json({ message: 'Article not found' });
        res.json(updatedArticle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

articleRoute.delete('/admin/article/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Article.findByIdAndDelete(id);
        res.json({ message: 'Article deleted successfully' });
    } catch (err) {
        if (err.name === 'CastError') return res.status(404).json({ message: 'Article not found' });
        else return res.status(500).json({ message: err.message });
    }
});

export default articleRoute;