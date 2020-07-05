import React from 'react';

function Results({ results }) {
	return (
		<ul className="results">
			{results.map((result) => (
				<li className="result" key={result.id}>
					<span className="description">{result.description}</span>
					<span className="price">${result.price}</span>
					<p className="result-text">{result.text}</p>
				</li>
			))}
		</ul>
	);
}

export default Results;
