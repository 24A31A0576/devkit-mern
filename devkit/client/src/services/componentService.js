import api from './api.js';

export const componentService = {
  getAll: async (params = {}) => {
    const { data } = await api.get('/components', { params });
    return data;
  },
  getBySlug: async (slug) => {
    const { data } = await api.get(`/components/slug/${slug}`);
    return data;
  },
  getPopular: async () => {
    const { data } = await api.get('/components/popular');
    return data;
  },
  addFavorite: async (id) => {
    const { data } = await api.post(`/favorites/${id}`);
    return data;
  },
  removeFavorite: async (id) => {
    const { data } = await api.delete(`/favorites/${id}`);
    return data;
  },
  getFavorites: async () => {
    const { data } = await api.get('/favorites');
    return data;
  },
};
