const express = require('express');
const { connectDB } = require('./config/database');

// Require routes
const commentRoute = require('./routes/commentRoute');
const likeRoute = require('./routes/likeRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(express.json());
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// mount route
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/likes', likeRoute);
app.use('/api/v1/posts', postRoute);

connectDB();

app.listen(PORT, ()=> {
    console.log("App running on PORT: " + PORT);
}) 