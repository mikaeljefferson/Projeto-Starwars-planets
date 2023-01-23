const getPlanets = async () => {
  try {
    const endpoint = 'https://swapi.dev/api/planets';
    const request = await fetch(endpoint);
    const response = await request.json();
    console.log('RESPONSE .JSON: ', response);
    console.log('RESPONSE.results: ', response.results);
    return (response.results);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getPlanets;
