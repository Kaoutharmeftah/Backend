const router = require('express').Router();
const { createPost, getPost, getPosts, updatePost, deletePost} = require('../controllers/post');


router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router; 
