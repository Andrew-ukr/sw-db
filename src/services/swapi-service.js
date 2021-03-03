export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.personForm);
  }

  getPerson = async (id) => {
    return this.personForm(await this.getResource(`/people/${id}/`), id);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet = async (id) => {
    return this.planetForm(await this.getResource(`/planets/${id}/`), id)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship = async (id) => {
    return this.starshipForm(await this.getResource(`/starships/${id}/`), id);
  }

  planetForm = (planet, id) => {
    return {
      imgPath: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.orbital_period,
      diameter: planet.diameter,
    }
  }

  starshipForm = (starship, id) => {
    return {
      imgPath: `https://starwars-visualguide.com/assets/img/starships/${id+1}.jpg`,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }

  personForm = (people, id) => {
    const ident = people.url.replace(/\D/g, '');
    return {
      idKey: ident,
      url: people.url,
      imgPath: `https://starwars-visualguide.com/assets/img/characters/${ident}.jpg`,
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color,
    }
  }
}
