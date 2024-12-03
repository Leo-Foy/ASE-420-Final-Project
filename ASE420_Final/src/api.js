import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const fetchData = () => API.get('/data');
export const fetchFlashcards = (setId) => API.get(`/flashcardData?setId=${setId}`);
export const addData = (newData) => API.post('/data', newData);
