import { GET_POST, ADD_POST, EDIT_POST, GET_SINGLE_POST } from "./postTypes";

const initialState = {
  posts:[],
  post:{},
  loading:true
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case ADD_POST:
      return{
        ...state,
        loading:false
      }
    case GET_SINGLE_POST:
      return{
        ...state,
        post: action.payload,
        loading: false
      }
    case EDIT_POST:
      return{
        ...state,
        loading:false
      }

    default:
      return state;
  }
};

export default postReducer