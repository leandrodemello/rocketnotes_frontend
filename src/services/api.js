import axios from "axios";

export const api = axios.create({
   baseURL: 'https://api-do-rocknotes.onrender.com'
});