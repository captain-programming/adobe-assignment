const initial = {
  loading: false,
  posts: [],
  error: {
    status: false,
    message: "",
  },
  onePost: {},
  likes: {},
  deletePost: {},
  editPost: {},
  createPosts: {},
}

export const postReducer = (state=initial, {type, payload}) => {
  switch(type){
    case "POST_LOADING": return {...state, loading: true}
    case "POST_ERROR": return {...state, loading: false, error:{ status: true, message: payload }}
    case "GET_ALL_POST": return {...state, loading: false, error: {status: false, message: ""}, posts: payload};
    case "GET_ONE_POST": return {...state, loading: false, error: {status: false, message: ""}, onePost: payload};
    case "INCREASE_LIKE": return {...state, loading: false, error: {status: false, message: ""}, likes: payload};
    case "DECREASE_LIKE": return {...state, loading: false, error: {status: false, message: ""}, likes: payload};
    case "DELETE_POSTS": return {...state, loading: false, error: {status: false, message: ""}, deletePost: payload};
    case "EDIT_POSTS": return {...state, loading: false, error: {status: false, message: ""}, editPost: payload};
    case "CREATE_POSTS": return {...state, loading: false, error: {status: false, message: ""}, createPosts: payload};
    default: return state;
  }
}