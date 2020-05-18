import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { tokenConfig } from "./auth";
//get leads
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/leads/", tokenConfig(getState))
    .then((res) => {
      //   console.log(res);
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//delete leads
export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`http://127.0.0.1:8000/api/leads/${id}/`, tokenConfig(getState))
    .then((res) => {
      //   console.log(res);
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//add lead
export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/leads/", lead, tokenConfig(getState))
    .then((res) => {
      //   console.log(res);
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response.data));
};
