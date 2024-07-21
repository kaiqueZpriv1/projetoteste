import styled from 'styled-components';
// color #ff5400 - #f6fff8 - #cce3de - #343a40
export const PagamentoS = styled.section`
	width: 100%;
	height: 100%;
	padding: 30px 15px;
	.container-pagamento {
		display: flex;
		flex-direction: column;
	}
`;

export const HeaderPagamento = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 10px;
	.content-header {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.card-icon {
		padding: 10px;
		background: #ff5400;
		border-radius: 15px;
	}
	.title-pag {
		font-size: 1.3em;
		color: #343a40;
		font-weight: 600;
	}
	.info-pag {
		font-size: 1em;
		color: #343a40;
		font-weight: 400;
	}
`;

export const FormPag = styled.div`
	display: flex;
	flex-direction: column;
	padding: 35px 0 0 0;
	gap: 10px;
	.title-form {
		font-size: 1em;
		font-weight: 600;
		color: #343a40;
		display: flex;
		align-items: center;
		gap: 15px;
	}
	.form-box {
		padding: 15px;
		width: 100%;
		border-radius: 10px;
		border: none;
		background: #dee3ed;
		color: #343a40;
	}
`;
