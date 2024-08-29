import axios from 'axios';

export const logout = () => async (dispatch) => {
  try {
    // Call the API endpoint to log out
    await axios.get('/auth/logout'); // Adjust the endpoint as needed

    // Clear user data from local storage or state
    localStorage.removeItem('userToken'); // Example for local storage
    
    // Optionally redirect to home or login page
    window.location.href = '/'; // Redirect after logout
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Logout error:', error);
    alert('Logout failed. Please try again later.');
  }
};
