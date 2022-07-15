const authReducer = (state = { data: null }, actions) => {
    switch (actions.type) {
        case 'AUTH':
            localStorage.setItem('Profile', JSON.stringify({ ...actions?.data }))
            return { ...state, data: actions?.data }
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null }
        default:
            return state;
    }
}
export default authReducer;