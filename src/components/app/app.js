import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';


export default class App extends Component {
  state= {
    showPerson: null,
  }

  onPersonClick = (id) => {
    this.setState({
      showPerson: id,
    })
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <Header />
        <RandomPlanet />
  
        <div className="row mb2">

          <div className="col-md-6">
            <ItemList 
              onPersonClick={this.onPersonClick}
            />
          </div>

          <div className="col-md-6">
            <PersonDetails />
          </div>

        </div>

      </div>
    );
  }
}