import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api',
});
