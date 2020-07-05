import React, { useState } from 'react';
import CreditForm from './components/CreditForm';
import Results from './components/Results';

function App() {
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [paymentTerms, setPaymentTerms] = useState(1);
	const [paymentType, setPayment] = useState('w');
	const [results, setResults] = useState([]);

	return (
		<>
			<h1 className="title">Control de crédito</h1>
			<CreditForm
				description={description}
				setDescription={setDescription}
				price={price}
				setPrice={setPrice}
				paymentTerms={paymentTerms}
				setPaymentTerms={setPaymentTerms}
				paymentType={paymentType}
				setPayment={setPayment}
				results={results}
				setResults={setResults}
			/>
			<Results results={results} />
		</>
	);
}

export default App;
