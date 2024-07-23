import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(errpr => {
                console.error('Error fetching data:');
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
};

export default useFetchData;