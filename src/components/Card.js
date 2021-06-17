import React from 'react';
import './Card.css';

export default function Card({ title, number, increase, color }) {
	return (
		<div className="card">
			{/* <div className="card" style={{ background: `${color}` }}> */}
			<div className="card-title">{title}</div>
			<div className="card-total-number">{number}</div>
			<div className="card-increase-number">{increase}</div>
		</div>
	);
}
