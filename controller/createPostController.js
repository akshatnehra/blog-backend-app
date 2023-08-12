const mongoose = require('mongoose');
const Post = mongoose.model("Post");

exports.createPost = async(req, res) => {
    try {
        // Fetch data from request
        const { title, body } = req.body;

        // Create a Post object
        const post = new Post({ title, body });

        // Save post in DB
        const savedPost = await post.save();

        res.json({
            insertedPost: savedPost,
            success: true
        })

        console.log("Post insertion SUCCESSFUL");
    } catch (error) {
        res.json({
            message: "failed to insert post in db",
            success: false
        })

        console.log(error);
        console.log("Post insertion FAILED");
    }
}