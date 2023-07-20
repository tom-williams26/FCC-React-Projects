import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [fetchError, setFetchError] = useState(null);
	

	const fetchData = async (apiUrl) => {

	await axios
			.get(apiUrl)
			.then(res => setData(res.data))
			.catch(err => setFetchError(err))
			.finally(() => setLoading(false));
				 
	};

	useEffect(() => {
		fetchData(url);

	},[url]);

	return { data, loading, fetchError };
};

export default useAxiosFetch;
