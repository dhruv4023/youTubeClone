
export const addToHistory = (historyData) => async (dispatch) => {
    try {
//       const { data } = await api.addToHistory(historyData);
//       dispatch({ type: "POST_HISTORY", payload: data });
//       dispatch(getHistory());
    } catch (error) {
      console.log(error);
    }
  };


  export const clearHistory = (vid) => async (dispatch) => {
    try {
  //     const { userId} = vid;
  //     // console.log(vid);
  //     await api.deleteHistory(userId);
  //     dispatch(getHistory());
    } catch (error) {
      console.log(error);
    }
  };