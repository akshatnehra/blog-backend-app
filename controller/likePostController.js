const Like = require('../models/likeModel');
const Post = require('../models/postModel')

exports.likePost = async(req, res) => {
    try {
        const { post, user } = req.body;

        // Create Like object
        const like = new Like({ post ,user });

        // Save like
        const savedLike = await like.save();

        // Update Post 
        const updatedPost = await Post.findByIdAndUpdate(
            post, 
            { $push: {likes: savedLike._id } },
            { new: true }
        ).populate('likes').populate('comments');

        res.json({
            success: true,
            post: updatedPost
        })
    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Failed!"
        })
    }
}