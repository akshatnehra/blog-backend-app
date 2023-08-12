const Like = require('../models/likeModel');
const Post = require('../models/postModel');

exports.unlikePost = async(req, res) => {
    try {
        const { like, post } = req.body;

        // Delete Like
        const deletedLike = await Like.findOneAndDelete({_id: like, post: post});

        // Delete from post
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});

        res.json({
            success: true,
            post: updatedPost
        })
    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: 'Failed to unlike'
        })
    }
}