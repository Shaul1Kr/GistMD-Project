import * as api from "../api";

export const getPatients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPatients();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const creatPatient = (paitent) => async (dispatch) => {
  try {
    const { data } = await api.creatPatient(paitent);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = (id) => async (dispatch) => {
  try {
    await api.deletePatient(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
