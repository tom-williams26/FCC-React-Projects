import { useState, useEffect } from 'react';

const useAxiosFetch = (dataUrl) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [fetchError, setFetchError] = useState(null);

	const fetchQuotes = async (url) => {
		setIsLoading(true);

        await fetch(url)
        .then((response) => response.json())
        .then(data => setData(data))
        .catch(err => setFetchError(err))
        .finally(() => setIsLoading(false));
	};

    useEffect(() => {
		fetchQuotes(dataUrl);

	},[dataUrl]);

	return { data, isLoading, fetchError };
};

export default useAxiosFetch;
