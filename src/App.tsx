import React from 'react';
import Chart from './components/Chart';
import Loader from './components/Loader';
import './App.css';
import useGetData from './hooks/useGetData';

const App = () => {
  const data = useGetData();
  return (
    <div className="App">
      {data !== null
        ? (
          <div className="App__chart">
            <h1>Piece of cake</h1>
            <Chart data={data} />
          </div>
        )
        : <Loader />}
    </div>
  );
};

export default App;
