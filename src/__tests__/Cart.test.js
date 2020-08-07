import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cart from '../Pages/Cart';

describe('Cart page is rendered', () => {
	it('<Cart />', () => {
		const { getByTestId } = render(<Cart />);
		expect(getByTestId('CartContainer')).toBeInTheDocument();
	});
});
