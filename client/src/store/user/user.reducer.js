const initial = {
  loading: false,
  users: [],
  error: {
    status: false,
    message: "",
  },
  login: "",
}

export const userReducer = (state=initial, {type, payload}) => {
  switch(type){
    case "USER_LOADING": return {...state, loading: true};
    case "USER_ERROR": return {...state, loading: false, error:{ status: true, message: payload }};
    case "GET_ALL_USER": return {...state, loading: false, error: {status: false, message: ""}, users: payload}
    case "CURRENT_USER": return {...state, login: payload}
    default: return state;
  }
}