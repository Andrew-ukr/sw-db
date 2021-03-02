import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service.js';
import Spiner from '../spiner/';
import ErrMassage from '../err-massage/';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    peopleList: null,
    err: false,
    loading: true
  }

  getData = new SwapiService();

  erroMassage = (err) => {
    this.setState({
      peopleList: null,
      err: true,
      loading: false
    })
  }

  componentDidMount() {
    this.getData.getAllPeople()
    .then((peopleList)=>{
      this.setState({
        peopleList,
        err: false,
        loading: false
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
    const {peopleList, loading, err} = this.state;
    const listItems = peopleList ? this.list(peopleList): null;
    const loadingIcon = loading ? <Spiner />: null;
    const errorMassage = err ? <ErrMassage />: null;

    return (
      <ul className="item-list list-group">
        {listItems}
        {loadingIcon}
        {errorMassage}
      </ul>
    );
  }
}