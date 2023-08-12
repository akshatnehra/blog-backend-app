const Comment = require('../models/commentModel'); // Import the Comment model
const Post = require('../models/postModel'); // Import the Post model

exports.createComment = async (req, res) => {
    // fetch details from request
    const { user, body, post } = req.body;

    // Create comment object
    const comment = new Comment({ user, body, post });

    try {
        // Save the comment
        const createdComment = await comment.save();

        // Update Post
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: createdComment._id } }, // Use the '_id' of the created comment
            { new: true }
        ).populate('comments');

        res.json({
            updatedPost: updatedPost,
            isSuccess: true
        });
    } catch (error) {
        res.json({
            message: "Failed to insert comment in the database",
            isSuccess: false
        });

        console.error(error);
    }
};
