import { createContext } from 'react';

export const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  return (
    <PlanetsContext.Provider>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {

}.isRequired;

export default PlanetsProvider;
