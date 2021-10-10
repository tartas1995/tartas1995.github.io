import * as actionTypes from './actionTypes';

const initialState: State = {
    post: null,
    list: {
        posts: []
    }
}

const reducer = (
    state: State = initialState, 
    action: PostAction): State => {
        switch (action.type) {
            case actionTypes.OPEN_POST:
                return {
                    ...state,
                    post: action.post
                }
                break;
            case actionTypes.CLOSE_POST:
                return {
                    ...state,
                    post: null
                }
                break;
            case actionTypes.ADD_POST_LIST:
                const copy = { ...state };
                const posts = copy.list.posts;
                posts.push(action.post);
                copy.list.posts = posts;
                return copy;
                break;
        }
        return state
}

export default reducer