exports.createComment = async(req, res) => {
    console.log("Comment Created");
    res.json({
        isSuccess: true
    })
}