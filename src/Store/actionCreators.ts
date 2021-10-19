import * as actionTypes from './actionTypes';

export function openPost(post: Post) {
    const action: PostAction = {
        type: actionTypes.OPEN_POST,
        post
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function closePost() {
    const action: PostAction = {
        type: actionTypes.CLOSE_POST,
        post: null
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function addPostList(post: Post) {
    const action: PostAction = {
        type: actionTypes.ADD_POST_LIST,
        post
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function setPostList(list: List) {
    const action: ListAction = {
        type: actionTypes.SET_POST_LIST,
        list
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}