import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    // console.log(data);
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateUserData = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateUserData(id, updateData);
    dispatch({ type: "UPDATE_PROFILE", payload: data });
    await dispatch(fetchAllUsers());
  } catch (error) {
    console.log(error);
  }
};
