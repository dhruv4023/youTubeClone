
import { redirect } from 'react-router-dom';
import { setCurrentUser } from './currentUser';
import { fetchAllUsers } from './user';

export const login = () => async (dispatch) => {
    try {
        // dispatch({ type: 'AUTH', data });
        // dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        // dispatch(fetchAllUsers());
    } catch (error) {
        // console.log(error.response.data);
        alert(error.response.data.message);
        // console.log("hello")
    }
}

