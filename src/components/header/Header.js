import React from 'react';
import { HeaderS } from './style';
import { Global } from '../Global';

export const Header = () => {
	return (
		<>
			<Global />
			<HeaderS>
				<h3 className='text-header-1'>Micro</h3>
				<h3 className='text-header-2'>SeL</h3>
			</HeaderS>
		</>
	);
};
