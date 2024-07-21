import React, { useState } from 'react';
import { FormPag, HeaderPagamento, PagamentoS } from './style';
import { IoCard } from 'react-icons/io5';
import { IoIosInformationCircleOutline } from 'react-icons/io';

export const Pagamento = () => {
	const [valor, setValor] = useState('');
	const regex = /^[a-zA-Z]+$/; // Regex para apenas letras

	const handleChange = (event) => {
		const isValid = regex.test(event.target.value);
		if (isValid) {
			setValor(event.target.value);
		} else {
			alert('Este campo não aceita numeros');
		}
	};
	return (
		<>
			<PagamentoS>
				<div className='contaienr-pagamento'>
					<HeaderPagamento>
						<div className='content-header'>
							<div className='card-icon'>
								<IoCard size={25} color='#fafafa' />
							</div>
							<h3 className='title-pag'>Pagamento</h3>
						</div>
						<p className='info-pag'>
							Por favor, insira os dados completos para que o pagamento seja
							efetuado
						</p>
					</HeaderPagamento>
					<FormPag>
						<p className='title-form'>
							<IoIosInformationCircleOutline size={20} color='#000' />
							Nome completo
						</p>
						<input
							type='text'
							value={valor}
							onChange={handleChange}
							className='form-box'
						/>
					</FormPag>
					<FormPag>
						<p className='title-form'>
							<IoIosInformationCircleOutline size={20} color='#000' />
							Numero do cartão
						</p>
						<input type='number' className='form-box' />
					</FormPag>
				</div>
			</PagamentoS>
		</>
	);
};
