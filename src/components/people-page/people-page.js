import React, { Component } from 'react'
import ItemDetails from '../item-details';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import Row from '../row/index';
import ErrBoundary from '../err-boundary';

export default class PeoplePage extends Component {
  getData = new SwapiService();

  state= {
    personId: 1,
  }

  onPersonClick = (id) => {
    this.setState({
      personId: id,
    })
  }

  render() {
    const itemList = () => {
      return (
        <ItemList 
          renderText={(item => `${item.name} , ${item.gender} , ${item.birthYear}`)}
          onPersonClick={this.onPersonClick}
          getData={this.getData.getAllPeople}
        />
      )
    }
    
    const personDetails = () => {
      return (
        <ErrBoundary>
          <ItemDetails 
            data={this.state.personId}
          />
        </ErrBoundary>
      )
    }

    return (
      <ErrBoundary>
        <Row left={itemList()} right={personDetails()}/>
      </ErrBoundary>
    )
  }
}