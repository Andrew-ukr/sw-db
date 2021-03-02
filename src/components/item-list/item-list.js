import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service.js';
import Spiner from '../spiner/';
import ErrMassage from '../err-massage/';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    peopleList: null,
    err: false,
  }

  getData = new SwapiService();

  erroMassage = (err) => {
    this.setState({
      peopleList: null,
      err: true,
    })
  }

  componentDidMount() {
    this.getData.getAllPeople()
    .then((peopleList)=>{
      this.setState({
        peopleList
      })
    })
    .catch(this.erroMassage)
  }

  list = (arr) => {
    const {onPersonClick} = this.props;
    return (
      arr.map(item => {
        return (
          <li 
            key={item.idKey}
            className="list-group-item"
            onClick={()=>{onPersonClick(item.idKey)}}
          >
            {item.name}
          </li>
        )
      })
    )
  }
  
  render() {
    const {peopleList} = this.state;
    const listItems = peopleList ? this.list(peopleList): <Spiner />;

    return (
      <ul className="item-list list-group">
        {listItems}
      </ul>
    );
  }
}