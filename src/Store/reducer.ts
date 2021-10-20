import * as actionTypes from './actionTypes';

const initialState: State = {
    opened: null,
    list: []
}

const reducer = (
    state: State = initialState, 
    action: Action): State => {
        let temp = null;
        switch (action.type) {
            case actionTypes.OPEN_POST:
                return {
                    ...state,
                    opened: action.index
                }
                break;
            case actionTypes.CLOSE_POST:
                return {
                    ...state,
                    opened: null
                }
                break;
            case actionTypes.UPDATE_POST:
                temp = state.list;
                temp[action.index] = action.post;
                return { ...state, list: [...temp]}
            case actionTypes.ADD_POST_LIST:
                return { ...state, list:[...state.list, action.post] };
                break;
            case actionTypes.SET_POST_LIST:
                return { ...state, list:[...action.list] };
                break;
        }
        return state
}

export default reducer