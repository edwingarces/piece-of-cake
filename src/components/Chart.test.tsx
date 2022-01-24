import React from 'react';
import { render } from '@testing-library/react';
import Chart from './Chart';

const DataMock = [
  {
    date: '2020-08-18T00:01:43.633-05:00',
    price: 39285.85,
    percentageChange: 0.86257,
    volume: 128684937,
    change: 335.97,
  },
  {
    date: '2020-08-18T00:01:43.657-05:00',
    price: 39285.85,
    percentageChange: 0.86257,
    volume: 128684937,
    change: 335.97,
  },
];

test('Renders Loader', () => {
  render(<Chart data={DataMock} />);
});
