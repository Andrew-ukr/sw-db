import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service.js'
import Spiner from '../spiner/';
import ErrMassage from '../err-massage/';

export default class RandomPlanet extends Component {
  state ={
    planet: {
      imgPath: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    },
    loading: true,
    err: false,
  }

  componentDidMount() {
    this.updatePlanets();
    this.interval = setInterval(this.updatePlanets, 2000);
  }

  getData = new SwapiService();

  erroMassage = (err) => {
    this.setState({
      err: true,
      loading: false,
    })
  }

  updatePlanets = () => {
    const id = Math.floor(Math.random()*25+1);
    this.getData.getPlanet(id)
    .then((planet)=> {
      this.setState({
        planet,
        loading: false,
      })
    })
    .catch(this.erroMassage)
  }

  render() {
    const {planet,loading,err} = this.state;
    const errMasage = err ? <ErrMassage />: null;
    const loadingLayout = loading ? <Spiner />: null;
    const defaultContent = !loading && !err ? <DefaultContent planet={planet}/>: null;

    return (
      <div className="random-planet jumbotron rounded">
        {errMasage}
        {loadingLayout}
        {defaultContent}
      </div>
    );
  }
}

/**
 * Компонент котрий не виносився окремо в папку, оскільки він не буде більше використовуватись
 */
const DefaultContent = ({planet}) => {
  const {name, population, rotationPeriod, diameter, imgPath} = planet;
  
  return (
    <>
      <img 
        className="planet-image"
        src={imgPath} alt="Star Wars planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}