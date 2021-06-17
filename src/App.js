import CardGroup from './components/CardGroup';
import WorldMap from './components/WorldMap';
import Table from './components/Table';

export default function App() {
	return (
		<div>
			<h1>COVID Live Update</h1>
			<div className="upper-content">
				<WorldMap />
				<CardGroup />
			</div>
			<Table />
		</div>
	);
}
