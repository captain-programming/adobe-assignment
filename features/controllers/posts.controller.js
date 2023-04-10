const PostModal = require("../models/post.model");

const createPost = async(req, res) => {
  const {content, user_id} = req.body;

  try{
    let newPosts = await PostModal.create({user_id, content});

    res.status(200).send(newPosts)
  }catch(err){
    console.log(err);
    res.status(500).json("Something went wrong");
  }

}

const retrivePostById = async(req, res) => {
  const {id: _id} = req.params;

  let oldPost = await PostModal.findById({_id})

  if(!oldPost){
    return res.status(404).send('Post not found');
  }

  try{
    const findPost = await PostModal.findById({_id});
    res.status(200).json(findPost);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }

}

const updatePost = async (req, res) => {
  const {id: _id} = req.params;
  const {content} = req.body;

  let oldPost = await PostModal.findById({_id})

  if(!oldPost){
    return res.status(404).send('Post not found');
  }

  try{
    const update = await PostModal.findByIdAndUpdate(_id, {$set: {content: content, updated_at: Date.now()}}, {new: true});
    res.status(200).json(update);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const deletePosts = async (req, res) => {
  const {id: _id} = req.params;

  let oldPost = await PostModal.findById({_id})

  if(!oldPost){
    return res.status(404).send('Post not found');
  }

  try{
    const deletePost = await PostModal.deleteOne({_id});
    res.status(200).json(deletePost);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const postIncrementLike = async (req, res) => {
  const {id: _id} = req.params;

  let oldPost = await PostModal.findById({_id})

  if(!oldPost){
    return res.status(404).send('Post not found');
  }

  try{
    let count = oldPost.likes + 1;
    const increment = await PostModal.findByIdAndUpdate(_id, {$set: {likes: count, updated_at: Date.now()}}, {new: true});
    res.status(200).json(increment);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const postDecrementLike = async (req, res) => {
  const {id: _id} = req.params;

  let oldPost = await PostModal.findById({_id})

  if(!oldPost){
    return res.status(404).send('Post not found');
  }

  try{
    let count = oldPost.likes;
    if(count>0){
      count = count - 1;
    }
    const decrement = await PostModal.findByIdAndUpdate(_id, {$set: {likes: count, updated_at: Date.now()}}, {new: true});
    res.status(200).json(decrement);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

module.exports = {createPost, retrivePostById, updatePost, deletePosts, postIncrementLike, postDecrementLike}