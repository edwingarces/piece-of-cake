import React from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ data }: { data: any[] }) => (
  <ResponsiveContainer>
    <LineChart
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="4 4" />
      <XAxis dataKey="date">
        <Label value="Date" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis
        label={{ value: 'Price', angle: -90, position: 'left' }}
        dataKey="price"
        domain={['dataMin', 'dataMax']}
      />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line
        name="IPC"
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
