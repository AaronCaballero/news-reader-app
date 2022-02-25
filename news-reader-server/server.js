// Express
const express = require('express');
const app = express();

// req.body on json format
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// DB connection
const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/news-reader-db')
    .then(() => console.log('DB connected.'));

// News model
const NewsModel = require('./models/news.model');

// Cors
const cors = require('cors');
app.use(cors());

// Routing
// Get news
app.get('/api/news', async (req, res) => {
    NewsModel
        .find()
        .then(allNews => res.json(allNews));
});

// Update news to archived
app.put('/api/archiveNews', async (req, res) => {
    const id = req.body.id;
    try {
        await NewsModel.findById(id, (error, newsToUpdate) => {
            newsToUpdate.archiveDate = new Date;
            newsToUpdate.save();
        }).clone();
        res.send('updated');
    } catch (err) {
        console.log(err);
    }
});

// Delete
app.delete('/api/deleteNews/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await NewsModel.findByIdAndRemove(id).exec();
        res.send('deleted');
    } catch (err) {
        console.log(err);
    }
});


// Server runnig port
app.listen(5000, () => console.log('Server running...'));