import React from 'react';
import { Global } from '../Global';
import {
	CircleCenter1,
	CircleCenter2,
	DetailsCenter,
	DetailsTop,
	HomeS,
	ReceitaPag,
	ResumoPagamentos,
} from './style';
import { AiTwotoneFileText } from 'react-icons/ai';
import { Pagamento } from './pagamento/Index';

export const Home = () => {
	return (
		<>
			<Global />
			<HomeS>
				<DetailsTop />
				<div className='container-home'>
					<ResumoPagamentos>
						<h3 className='title-pag'>Resumo pagamento</h3>
						<div className='estrutura-pag'>
							<div className='dados-pag'>
								<h3 className='title-dados-pag'>Numero do pedido:</h3>
								<h3 className='title-dados-pag'>Valor IOF:</h3>
								<h3 className='title-dados-pag'>Valor do pedido:</h3>
							</div>
							<div className='dados-pag'>
								<h3 className='title-dados-pag'>1894629</h3>
								<h3 className='title-dados-pag'>R$ 65,83</h3>
								<h3 className='title-dados-pag'>R$ 172,82</h3>
							</div>
						</div>
					</ResumoPagamentos>
					<DetailsCenter>- - - - - - - - - - - - - - - - - </DetailsCenter>
					<ReceitaPag>
						<div className='value-receita'>
							<h3 className='title-receita'>Receita total</h3>
							<p className='number-receita'>R$ 1218,24</p>
						</div>
						<AiTwotoneFileText size={60} color='#343a40' />
					</ReceitaPag>
				<CircleCenter1 />
				<CircleCenter2 />
				</div>
			</HomeS>
			<Pagamento/>
		</>
	);
};
