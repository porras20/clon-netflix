import { useState, useEffect } from 'react';
import axios from 'axios';

const useTmdbApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '26aec7077dcb98932770cd494eb99709';

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${url}?api_key=${apiKey}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [data, isLoading, error];
};

export default useTmdbApi;
