import { useState, useEffect, useCallback } from 'react';
import { componentService } from '../services/componentService.js';

export function useComponents(initialParams = {}) {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [params, setParams] = useState(initialParams);

  const fetchComponents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await componentService.getAll(params);
      setComponents(data.components);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch components');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => { fetchComponents(); }, [fetchComponents]);

  const updateFilters = (newParams) => setParams(prev => ({ ...prev, ...newParams }));

  return { components, loading, error, updateFilters, refetch: fetchComponents };
}
