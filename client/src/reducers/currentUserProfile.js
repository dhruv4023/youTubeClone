const currentUserProfileReducer = (states = [], action) => {
    switch (action.type) {
        case "FETCH_USERS":
            return action.payload;
        default:
            return states;
    }
}

export default currentUserProfileReducer;