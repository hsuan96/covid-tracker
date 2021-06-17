import React from 'react';
import Card from './Card';
import useWorldStat from '../util/useWorldStat';
import './CardGroup.css';

export default function CardGroup() {
	const { worldStat } = useWorldStat();
	return (
		worldStat && (
			<div className="card-group-container">
				<div className="card-update">Last Update: {worldStat['Last Update']}</div>
				<div className="card-group">
					<Card
						title="Total Cases"
						number={worldStat['Total Cases_text']}
						increase={worldStat['New Cases_text']}
						color="darkgray"
					/>
					<Card
						title="Total Deaths"
						number={worldStat['Total Deaths_text']}
						increase={worldStat['New Deaths_text']}
						color="darkgray"
					/>
					<Card title="Active Cases" number={worldStat['Active Cases_text']} color="darkgray" />
					<Card title="Total Recovered" number={worldStat['Total Recovered_text']} color="darkgray" />
				</div>
			</div>
		)
	);
}
