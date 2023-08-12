const mongoose = require('mongoose');
const Post = mongoose.model("Post");

exports.getPost = async(req, res) => {
    try {
        const allPosts = await Post.find();

        res.json({
            success: true,
            posts: allPosts
        })
    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Failed to fetch posts"
        })
    }
}