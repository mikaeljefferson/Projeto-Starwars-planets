import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './Context/PlanetsProvider';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
