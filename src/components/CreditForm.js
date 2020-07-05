import React from 'react';
import shortid from 'shortid';

function CreditForm(props) {
	const {
		description,
		setDescription,
		price,
		setPrice,
		paymentTerms,
		setPaymentTerms,
		paymentType,
		setPayment,
		results,
		setResults,
	} = props;
	const calcPayments = () => {
		let payment;
		switch (paymentType) {
			case 'w':
				payment = price / paymentTerms / 4;
				break;
			case 'q':
				payment = price / paymentTerms / 2;
				break;
			default:
				payment = price / paymentTerms;
		}
		return payment;
	};

	const paymentTypeWord = () => {
		let word;
		switch (paymentType) {
			case 'w':
				word = 'semanales';
				break;
			case 'q':
				word = 'quincenales';
				break;
			default:
				word = 'mensuales';
		}
		return word;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setResults([
			...results,
			{
				id: shortid.generate(),
				description,
				price,
				text: `Sus pagos ${paymentTypeWord()} son de $${calcPayments()}`,
			},
		]);
	};

	return (
		<form action="#" method="POST" className="form" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="description">Descripción</label>
				<input
					type="text"
					id="description"
					name="description"
					className="form-control"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="price">Precio</label>
				<input
					type="number"
					id="price"
					name="price"
					className="form-control"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
			</div>
			<div>
				<label htmlFor="payment-terms">Plazos pago (meses)</label>
				<input
					type="number"
					id="payment-terms"
					name="payment-terms"
					className="form-control"
					min="1"
					value={paymentTerms}
					onChange={(e) => setPaymentTerms(Number(e.target.value))}
				/>
			</div>
			<div>
				<label htmlFor="payment-type">Tipo abono</label>
				<select
					value={paymentType}
					onChange={(e) => setPayment(e.target.value)}
					id="payment-type"
					name="payment-type"
					className="form-control"
				>
					<option value="w">Semanal</option>
					<option value="q">Quincenal</option>
					<option value="m">Mensual</option>
				</select>
			</div>
			<input type="submit" value="Calcular" className="btn" />
		</form>
	);
}

export default CreditForm;
