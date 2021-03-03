import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends Component {
  state= {
    personId: null,
    planetId: null,
    starshipId: null,
  }

  getData = new SwapiService();

  onPersonClick = (id) => {
    this.setState({
      personId: id,
    })
  }


  render() {
    return (
      <div className="content-body">
        <Header />
        <RandomPlanet />
  
        <div className="row mb2 list">
          <div className="col-md-6">
            <ItemList 
              renderText={(item => `${item.name} , ${item.gender} , ${item.birthYear}`)}
              onPersonClick={this.onPersonClick}
              getData={this.getData.getAllPeople}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails 
              data={this.state.personId}
            />
          </div>
        </div>

        <div className="row mb2 list">
          <div className="col-md-6">
            <ItemList 
              renderText={(item => `${item.name} , population : ${item.population}`)}
              onPersonClick={this.onPersonClick}
              getData={this.getData.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails 
              data={this.state.planetId}
            />
          </div>
        </div>

        <div className="row mb2 list">
          <div className="col-md-6">
            <ItemList 
              renderText={(item => (<span>dfdfdfdf</span>))}
              onPersonClick={this.onPersonClick}
              getData={this.getData.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails 
              data={this.state.starshipId}
            />
          </div>
        </div>

      </div>
    );
  }
}