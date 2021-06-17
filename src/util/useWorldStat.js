import { useEffect, useState } from 'react';

export default function useWorldStat() {
	const [ data, setData ] = useState(null);
	const [ worldStat, setWorldStat ] = useState(null);
	const [ top20CoutryStat, setTop20CountryStat ] = useState(null);

	useEffect(() => {
		fetch('https://covid-19-tracking.p.rapidapi.com/v1', {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '***',
				'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
			}
		})
			.then(function(response) {
				return response.json();
			})
			.then(function(result) {
				setData(result);
				setWorldStat(result[0]);
				setTop20CountryStat(result.slice(1, 21));

				// return result;
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return { data, worldStat, top20CoutryStat };
}
