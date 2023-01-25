import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './planetsContex';

function PlanetsProvider({ children }) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [arrFilter, setArrFilter] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const json = await response.json();
      setList(json.results);
      setFilteredList(json.results);
    };
    fetchAPI();
  }, []);

  const contextValue = useMemo(() => ({
    list,
    setList,
    filteredList,
    setFilteredList,
    filter,
    setFilter,
    arrFilter,
    setArrFilter,
  }), [list, setList, filteredList,
    setFilteredList, filter, setFilter, arrFilter, setArrFilter]);

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
