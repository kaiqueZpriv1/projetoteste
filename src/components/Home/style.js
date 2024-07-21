// color #ff5400 - #f6fff8 - #cce3de - #343a40

import styled from 'styled-components';

export const HomeS = styled.main`
	width: 100%;
	.container-home {
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 30px 30px 0 30px;
		padding: 10px 5px;
		background: #edf2fb;
		height: 300px;
		border-radius: 15px;
		position: relative;
		z-index: 3;
	}
`;

export const DetailsTop = styled.div`
	width: 100px;
	height: 20px;
	background: #ff5400;
	border-radius: 8px;
	position: relative;
	left: 40%;
	top: 40px;
	z-index: 2;
`;

export const ResumoPagamentos = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 10px;
	.title-pag {
		font-size: 1.5em;
		color: #343a40;
		font-weight: 600;
	}
	.estrutura-pag {
		margin: 10px;
		display: flex;
		align-items: center;
		gap: 70px;
	}
	.dados-pag {
		display: flex;
		flex-direction: column;
		gap: 5px;
		align-items: start;
		justify-content: start;
	}
	.title-dados-pag {
		font-size: 1em;
		color: #343a40;
		font-weight: 500;
	}
`;

export const DetailsCenter = styled.h3`
	font-weight: 500;
	font-size: 1.5em;
	color: #343a40;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	bottom: 10px;
`;
export const CircleCenter1 = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background: #fafafa;
	position: absolute;
	bottom: 90px;
	left: -27px;
	z-index: 9;
	`;
export const CircleCenter2 = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background: #fafafa;
	position: absolute;
	z-index: 9;
	bottom: 90px;
	right: -27px;
`;
export const ReceitaPag = styled.div`
	display: flex;
	align-items: center;
	gap: 120px;
	padding: 0 15px;
	.value-receita {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 5px;
	}
	.title-receita {
		font-size: 1em;
		color: #343a40;
		font-weight: 500;
	}
	.number-receita {
		font-size: 1.5em;
		color: #000;
		font-weight: 700;
	}
`;
