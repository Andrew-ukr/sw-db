export default class ServerSWData  {
  _urlPrefix = 'https://swapi.dev/api/';

  getData = async (url) => {
    const res = await fetch(`${this._urlPrefix}${url}`);
    if (!res.ok) {
      throw new Error('Errorrrrrrrrrrrrrrrrrrrrrrrrrrr'); 
    }
    return await res.json();
  }

  getAllPersons = () => {
    this.getData('people/')
    .then((a) => {a.results.forEach(elem => console.log(elem.name))})
  }

  getPerson = (id) => {
    this.getData(`people/${id}`)
    .then((a) => {console.log(a.name)})
  }
  getAllPlanets = () => {
    this.getData('planets/')
    .then((a) => {a.results.forEach(elem => console.log(elem.name))})
  }

  getPlanet = (id) => {
    this.getData(`planets/${id}`)
    .then((a) => {console.log(a.name)})
  }
  getAllStarships  = () => {
    this.getData('starships/')
    .then((a) => {a.results.forEach(elem => console.log(elem.name))})
  }

  geStarship  = (id) => {
    this.getData(`starships/${id}`)
    .then((a) => {console.log(a.name)})
  }
}

// new ServerSWData().getPerson(5);
// new ServerSWData().getPlanet(5);
// new ServerSWData().geStarship(5);

// new ServerSWData().getAllPersons(5);
// new ServerSWData().getAllPlanets(5);
// new ServerSWData().getAllStarships(5);