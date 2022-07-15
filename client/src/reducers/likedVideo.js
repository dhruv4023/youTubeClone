const likedVideoReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "GET_LIKEDVIDEO":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default likedVideoReducer;