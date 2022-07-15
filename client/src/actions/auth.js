
import * as api from '../api'
import { setCurrentUser } from './currentUser';
import { fetchAllUsers } from './user';
// export const signup = (authData) => async (dispatch) => {
//     try {
//         // console.log(authData)
//         const { data } = await api.signup(authData);
//         dispatch({ type: 'AUTH', data });
//         dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
//        dispatch(fetchAllUsers());
//     } catch (error) {
//         // console.log(error.response.data);
//         alert(error.response.data.message);
//     }
// }
export const login = (authData) => async (dispatch) => {
    try {
        // console.log(authData)
        const { data } = await api.login(authData);
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
       dispatch(fetchAllUsers());
    } catch (error) {
        // console.log(error.response.data);
        alert(error.response.data.message);
        // console.log("hello")
    }
}

