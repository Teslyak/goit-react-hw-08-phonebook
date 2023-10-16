import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = BASE_URL;

export const fetchDataAll = signal => {
  return axios.get('contact', { signal });
};

export const addNewContacts = contact => {
  return axios.post('contact', contact);
};

export const delContact = id => {
  return axios.delete(`contact/${id}`);
};

export const signUp = credentials => {
  return axios.post('users/signup', credentials);
};

export const loginUser = credentials => {
  return axios.post('users/login', credentials);
};
