import React, { useEffect, useState } from 'react';
import getPlanets from '../Service/planetsApi';

function Table() {
  const [planetsList, setPlanetsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setIsLoading(true);

        const planetsAPI = await getPlanets();
        console.log(planetsAPI);
        setPlanetsList(planetsAPI);
      } catch (error) {
        setErrors(error);
        // console.log(errors);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAPI();
  }, []);

  const filteredPlanets = planetsList.filter((planet) => planet.name.toLowerCase()
    .includes(search.toLowerCase()));

  return (
    <>
      <h1>
        Star Wars Project
      </h1>
      <label htmlFor="name-filter">
        <h4>Filter planets by:</h4>
        {' '}
        <div>
          <input
            className="input"
            data-testid="name-filter"
            id="name-filter"
            name="name-filter"
            onChange={ (e) => setSearch(e.target.value) }
            value={ search }
            type="text"
          />
        </div>
      </label>

      <table>
        <thead>

          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population/</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <h3>
            { isLoading && 'Loading...' }
            { errors !== null && errors }
          </h3>
          { search.length > 0 ? filteredPlanets.map((planet) => (
            <tr className="table-primary" key={ planet.url }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))
            : planetsList.map((planet) => (
              <tr className="table-primary" key={ planet.url }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>

      <h3>Another component</h3>
    </>
  );
}

export default Table;
