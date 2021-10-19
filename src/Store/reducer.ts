import * as actionTypes from './actionTypes';

const initialState: State = {
    post: null,
    list: []
}

const reducer = (
    state: State = initialState, 
    action: Action): State => {
        const paction = action as PostAction;
        const laction = action as ListAction;
        switch (action.type) {
            case actionTypes.OPEN_POST:
                return {
                    ...state,
                    post: paction.post
                }
                break;
            case actionTypes.CLOSE_POST:
                return {
                    ...state,
                    post: null
                }
                break;
            case actionTypes.ADD_POST_LIST:
                return { ...state, list:[...state.list, paction.post] };
                break;
            case actionTypes.SET_POST_LIST:
                return { ...state, list:[...laction.list] };
                break;
        }
        return state
}

export default reducer