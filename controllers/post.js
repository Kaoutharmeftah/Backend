const Post = require ('../models/post');
exports.createPost = async (req, res) => {
    try {
        console.log('hello');
        const newPost = new Post(req.body);
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}    
exports.getPosts = async (req, res) => {
        try {
            let posts;
            const category = req.query.category;
            const userName = req.query.username;
            if(userName) {
                posts = await Post.find({username: userName})
            } else if (category) {
                posts = await Post.find({categories:{
                    $in:[category] 
                }});
            } else {
                posts = await Post.find();
            }
            res.status(200).json(posts);
        } catch (err) {
            res.status(500).json(err);
        }
} 
exports.getPost = async (req, res) => {
    try {
        const postId= req.params.id;
        const post = await Post.findById(postId);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
} 

exports.updatePost = async (req, res) => {
    try{
        const postId= req.params.id;
        const post = await Post.findByIdAndUpdate(postId,
            {...req.body}, {new:true});
            res.status(200).json(post);
    }catch (err){
        res.status(500).json(err);
    }
} 

exports.deletePost = async (req, res) => {
    try{
        const postId = req.params.id;
        await Post.findByIdAndDelete(postId);
        res.status(200).json('post deleted successfully');
    }catch (err) {
        res.status(500).json(err);
    }
} 