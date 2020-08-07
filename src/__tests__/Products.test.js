import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Products from '../Pages/Products';

describe('Products page is rendered', () => {
	it('<Products />', () => {
		const { getByTestId } = render(<Products />);
		expect(getByTestId('ProductsContainer')).toBeInTheDocument();
	});
});
