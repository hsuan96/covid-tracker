import React from 'react';
import { scaleLinear } from 'd3-scale';
import { ComposableMap, Geographies, Geography, Sphere } from 'react-simple-maps';
import useWorldStat from '../util/useWorldStat';

import countries from 'i18n-iso-countries';
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
countries.registerLocale(require('i18n-iso-countries/langs/fr.json'));

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default function WorldMap() {
	const { data } = useWorldStat();
	const maxNum = data ? parseInt(data[1]['Total Cases_text'].replace(/,/g, '')) : 0;
	const colorScale = scaleLinear().domain([ 0, maxNum ]).range([ '#ffedea', 'red' ]);

	return (
		<div className="map-container">
			<ComposableMap
				projectionConfig={{
					rotate: [ -10, 0, 0 ],
					scale: 147
				}}
			>
				<Sphere stroke="#E4E5E6" strokeWidth={0.5} />
				{data && (
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => {
								const d = data.find(
									(s) => countries.getAlpha3Code(s['Country_text'], 'en') === geo.properties.ISO_A3
								);
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill={
											d ? (
												colorScale(parseInt(d['Total Cases_text'].replace(/,/g, '')))
											) : (
												'#F5F4F6'
											)
										}
									/>
								);
							})}
					</Geographies>
				)}
			</ComposableMap>
		</div>
	);
}
