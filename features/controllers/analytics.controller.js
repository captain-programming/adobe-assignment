const PostModal = require("../models/post.model");
const UserModel = require("../models/users.model");

const totalUsers = async(req, res)=>{
  try{
    const totalUser = await UserModel.find({});
    res.status(200).json(totalUser);
  }catch(err){
    console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const topActiveUsers = async(req, res)=>{
  try{
    const users = await UserModel.aggregate([
      { $lookup: { from: 'posts', localField: '_id',foreignField: 'user_id', as: 'posts' } },
      { $project: { _id: 1, name: 1, email: 1, bio: 1, postCount: { $size: '$posts' } } },
      { $sort: { postCount: -1 } },
      { $limit: 5 }
    ]);
    res.json(users);
    // res.status(200).json("totalUser");
  }catch(err){
    console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const totalPosts = async(req, res)=>{
  try{
    const totalPost = await PostModal.aggregate([{ $lookup: { from: 'users', localField: 'user_id',foreignField: '_id', as: 'users' }}]);
    res.status(200).json(totalPost);
  }catch(err){
    console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const topLikedPosts = async(req, res)=>{
  try{
    const totalPost = await PostModal.find({}).sort({likes: -1}).limit(5);
    res.status(200).json(totalPost);
  }catch(err){
    console.log(err);
    res.status(500).json("Something went wrong");
  }
}

module.exports = {totalUsers, topActiveUsers, totalPosts, topLikedPosts};