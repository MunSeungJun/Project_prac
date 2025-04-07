import axios from 'axios';
import { login, logout } from './slices/authslice';

export const setUser = async formData => {
  try {
    const response = axios.post('http://localhost:3000/users/regist', formData);
    console.log(await response);
  } catch (e) {
    console.log(e);
  }
};

export const setLogin = async (formData, dispatch) => {
  try {
    axios.post('http://localhost:3000/users/login', formData, { withCredentials: true });
    dispatch(login());
  } catch (e) {
    console.log(e);
  }
};

export const setLogout = async (dispatch) => {
    try {
        await axios.get('http://localhost:3000/users/logout', {
          withCredentials: true,
        });
      } catch (err) {
        console.log(err);
      }
      dispatch(logout());
}

export const setAuth = async () => {
  const response = await axios.get('http://localhost:3000/users/check', {
    withCredentials: true,
  });
  return response.data.loggedIn;
};

