import api from './api.js';

export const themeService = {
  generate: async (projectType, mood, colorPreference) => {
    const { data } = await api.post('/theme/generate', { projectType, mood, colorPreference });
    return data;
  },
  getHistory: async () => {
    const { data } = await api.get('/theme/history');
    return data;
  },
};
