import axios from 'axios';

const accessToken = localStorage.getItem ('access');
export const refreshToken = localStorage.getItem ('refresh');
const BASE_URL = 'http://127.0.0.1:8000/';

export const axiosInstance = axios.create ({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});