const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    content: String,
    author: String,
    archiveDate: Date
});

const NewsModel = mongoose.model('news', NewsSchema);

module.exports = NewsModel;