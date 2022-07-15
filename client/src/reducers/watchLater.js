const watchLaterReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case "GET_WATCHLATER":
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default watchLaterReducer;