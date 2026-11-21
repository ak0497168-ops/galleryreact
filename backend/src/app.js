
const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage()
});

// Homepage / Health check
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'GalleryReact API is running successfully!'
    });
});

// Create post
app.post('/create-post', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'Please upload an image'
            });
        }

        const result = await uploadFile(req.file.buffer);

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        });

        return res.status(201).json({
            message: 'Post created successfully',
            post
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Failed to create post'
        });
    }
});

// Get all posts
app.get('/posts', async (req, res) => {
    try {
        const post = await postModel.find();

        return res.status(200).json({
            message: 'Posts fetched successfully',
            post
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Failed to fetch posts'
        });
    }
});

module.exports = app;
