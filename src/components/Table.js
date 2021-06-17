import React from 'react';
import useWorldStat from '../util/useWorldStat';
import './Table.css';

export default function Table() {
	const { top20CoutryStat } = useWorldStat();
	return (
		top20CoutryStat && (
			<div className="table">
				<h3>Most Affected Countries by Covid-19</h3>
				<div className="table-row table-head">
					<span className="table-country">Country</span>
					<span>Total Cases</span>
					<span>New Cases</span>
					<span>Total Death</span>
					<span>New Deaths</span>
					<span>Active Cases</span>
					<span>Total Recovered</span>
				</div>
				{top20CoutryStat.map((item) => (
					<div className="table-row">
						<span className="table-country">{item['Country_text']}</span>
						<span>{item['Total Cases_text']}</span>
						<span className="table-new">{item['New Cases_text']}</span>
						<span>{item['Total Deaths_text']}</span>
						<span className="table-death">{item['New Deaths_text']}</span>
						<span>{item['Active Cases_text']}</span>
						<span>{item['Total Recovered_text']}</span>
					</div>
				))}
			</div>
		)
	);
}
