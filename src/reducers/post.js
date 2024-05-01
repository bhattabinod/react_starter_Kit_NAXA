import { GET_POSTS_SUCCESS } from "@Actions/weather";

const initialState = {
    posts: [],
  };

const mySecondReducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state;
    }
}

export default mySecondReducer;
