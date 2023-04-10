import * as API from "../../api";

export const getUser = () => async(dispatch) => {
  dispatch({type: "USER_LOADING"});
  try{
    let {data} = await API.fetchUser();
    dispatch({type: "GET_ALL_USER", payload: data});
    dispatch({type: "CURRENT_USER", payload: data[0]})
  }catch(err){
    console.log(err.message);
    dispatch({type: "USER_ERROR", payload: err.message});
  }
}

export const currentUser = (data) => async(dispatch) => {
  dispatch({type: "CURRENT_USER", payload: data})
}