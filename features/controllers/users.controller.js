const UserModel = require("../models/users.model");

const createNewUser = async(req, res) => {
  const {name, email, bio} = req.body;
  try{
    const newUser = await UserModel.create({name: name, email: email, bio: bio});

    res.status(200).json({result: newUser})
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const retriveUserById = async (req, res) => {
  const {id: _id} = req.params;

  let oldUser = await UserModel.findById({_id})

  if(!oldUser){
    return res.status(404).send('User not found');
  }

  try{
    const findUser = await UserModel.findById({_id});
    res.status(200).json(findUser);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const updateUsers = async (req, res) => {
  const {id: _id} = req.params;
  const {name, bio} = req.body;

  let oldUser = await UserModel.findById({_id})

  if(!oldUser){
    return res.status(404).send('User not found');
  }

  try{
    const update = await UserModel.findByIdAndUpdate(_id, {$set: {name: name, bio: bio, updated_at: Date.now()}}, {new: true});
    res.status(200).json(update);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

const deleteUsers = async (req, res) => {
  const {id: _id} = req.params;

  let oldUser = await UserModel.findById({_id})

  if(!oldUser){
    return res.status(404).send('User not found');
  }

  try{
    const deleteUser = await UserModel.deleteOne({_id});
    res.status(200).json(deleteUser);
  }catch(err){
    // console.log(err);
    res.status(500).json("Something went wrong");
  }
}

module.exports = {createNewUser, retriveUserById, updateUsers, deleteUsers};