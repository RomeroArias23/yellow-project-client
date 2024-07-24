import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/apiConfig';  // Import the base URL configuration

const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = `${API_BASE_URL}${endpoint}`;  // Construct the full API URL

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [url]);  // Dependency on `url` ensures the effect runs when the URL changes

    return { data, loading };
};

export default useFetchData;
