import * as actionTypes from './actionTypes';

export function openPost(index: number) {
    const action: Action = {
        type: actionTypes.OPEN_POST,
        index
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function closePost() {
    const action: Action = {
        type: actionTypes.CLOSE_POST,
        index: null
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function updatePost(index:number, post: Post) {
    const action: Action = {
        type: actionTypes.UPDATE_POST,
        post,
        index
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function addPostList(post: Post) {
    const action: Action = {
        type: actionTypes.ADD_POST_LIST,
        post
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function setPostList(list: List) {
    const action: Action = {
        type: actionTypes.SET_POST_LIST,
        list
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}
