// src/utils/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this URL if your backend is hosted elsewhere
});

export const submitFeedback = (feedback: string) => api.post('/feedback', { feedback });
export const getMeals = () => api.get('/meals');
export const getNutritionalPlan = () => api.get('/nutritional-plan');
export const getProgress = () => api.get('/progress');
export const getWorkouts = () => api.get('/workouts');

export default api;