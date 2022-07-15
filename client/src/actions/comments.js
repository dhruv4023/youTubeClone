import * as api from '../api'


export const postComment = (commentData) => async (dispatch) => {
    try {
        const { data } = await api.postComment(commentData);
        dispatch({ type: "POST_COMMENT", payload: data });
        dispatch(getAllcomments())
    } catch (error) {
        console.log(error);
    }
}

export const editComment = (commentData) => async (dispatch) => {
    try {
        const { id, commentBody } = commentData;
        // console.log(id, commentBody)
        const { data } = await api.editComment(id, commentBody);
        dispatch({ type: 'POST_COMMENT', payload: data })
        dispatch(getAllcomments())
    } catch (error) {
        console.log(error)
    }
}
export const getAllcomments = () => async (dispatch) => {
    try {
        const { data } = await api.getAllcomments()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_COMMENTS', payload: data })
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}

export const deleteComment = (id) => async (dispatch) => {
    try {
        // console.log(id)
        await api.deleteComment(id)
        dispatch(getAllcomments())
    } catch (error) {
        console.log(error)
    }
}
