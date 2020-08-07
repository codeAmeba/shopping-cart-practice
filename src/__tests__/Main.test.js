import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from '../Pages/Main';

describe('Main page is rendered', () => {
	it('<Main />', () => {
		const { getByTestId } = render(<Main />);
		expect(getByTestId('MainContainer')).toBeInTheDocument();
	});
});
