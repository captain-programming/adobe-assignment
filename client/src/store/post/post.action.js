import * as API from "../../api";

export const getPost = () => async(dispatch) => {
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.fetchPost();
    dispatch({type: "GET_ALL_POST", payload: data});
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}

export const getPostById = (id) => async(dispatch) => {
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.fetchPostById(id);
    dispatch({type: "GET_ONE_POST", payload: data});
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}

export const increasePostLike = (id) => async(dispatch) => {
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.increaseLike(id);
    dispatch({type: "INCREASE_LIKE", payload: data});
    dispatch(getPost());
    dispatch(getPostById(id));
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}

export const decreasePostLike = (id) => async(dispatch) => {
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.decreaseLike(id);
    dispatch({type: "DECREASE_LIKE", payload: data});
    dispatch(getPost());
    dispatch(getPostById(id));
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}

export const deletePosts = (id) => async(dispatch) => {
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.deletePost(id);
    dispatch({type: "DELETE_POSTS", payload: data});
    dispatch(getPost());
    dispatch(getPostById(id));
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}

export const editPosts = (id, update) => async(dispatch) => {
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.editPost(id, update);
    dispatch({type: "EDIT_POSTS", payload: data});
    dispatch(getPost());
    dispatch(getPostById(id));
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}

export const createPost = (update) => async(dispatch) => {
  // console.log(update)
  dispatch({type: "POST_LOADING"});
  try{
    let {data} = await API.createPost(update);
    dispatch({type: "CREATE_POSTS", payload: data});
    dispatch(getPost());
  }catch(err){
    console.log(err.message);
    dispatch({type: "POST_ERROR", payload: err.message});
  }
}