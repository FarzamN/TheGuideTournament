import axios from 'axios';

export const EmailRegix = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const API = axios.create({
  baseURL: 'https://sassolution.org/Hospital/api',
});
