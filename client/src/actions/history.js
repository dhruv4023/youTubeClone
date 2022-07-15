import * as api from "../api";
export const addToHistory = (historyData) => async (dispatch) => {
    try {
      const { data } = await api.addToHistory(historyData);
      dispatch({ type: "POST_HISTORY", payload: data });
      dispatch(getHistory());
    } catch (error) {
      console.log(error);
    }
  };
  export const getHistory = () => async (dispatch) => {
    try {
      const { data } = await api.getHistory();
      // console.log(data)
      dispatch({ type: "GET_HISTORY", payload: data });
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const clearHistory = (vid) => async (dispatch) => {
    try {
      const { userId} = vid;
      // console.log(vid);
      await api.deleteHistory(userId);
      dispatch(getHistory());
    } catch (error) {
      console.log(error);
    }
  };