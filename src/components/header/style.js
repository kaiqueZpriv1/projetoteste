import styled from 'styled-components';

// color #ff5400 - #f6fff8 - #cce3de - #343a40

export const HeaderS = styled.header`
	width: 100%;
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	.container-header {
		display: flex;
		align-items: center;
	}
	.text-header-1 {
		font-size: 3em;
		color: #ff5400;
		font-weight: 600;
		font-family: 'Roboto Condensed', sans-serif;
	}
	.text-header-2 {
		font-size: 3em;
		color: #343a40;
		font-weight: 400;
		font-family: 'Roboto Condensed', sans-serif;
	}
`;
