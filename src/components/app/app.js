import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrMassage from '../err-massage';
import ItemDetails from '../item-details';
import Row from '../row/row';
import SwapiService from '../../services/swapi-service.js'
import './app.css';

export default class App extends Component {
  state = {
    errorMsg: false
  }

  componentDidCatch(error, info) {
    this.setState({
      errorMsg: true
    })
  }
  
  getData = new SwapiService();

  render() {

    if (this.state.errorMsg) {
      return <ErrMassage />
    }

    const persondetails = (<ItemDetails data={4} getData={this.getData.getPerson}/>)
    const starshipdetails = (<ItemDetails data={5} getData={this.getData.getPlanet}/>)

    return (
      <div className="content-body">
        <Header />
        <RandomPlanet />

        <Row 
          left={persondetails}
          right={starshipdetails}
        />
      </div>
    );
  }
}