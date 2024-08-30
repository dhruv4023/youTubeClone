import axios from 'axios';
import { setLogout } from '../state';


export const logout = () => async (dispatch) => {
  try {
    // Call the API endpoint to log out
    await axios.get(`${process.env.REACT_APP_SERVER}/auth/logout`); // Adjust the endpoint as needed
    dispatch(setLogout());
    window.location.href = '/'; // Redirect after logout
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Logout error:', error);
    alert('Logout failed. Please try again later.');
  }
};
