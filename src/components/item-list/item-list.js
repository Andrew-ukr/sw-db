import React, { Component } from 'react';
import Spiner from '../spiner/';
import ErrMassage from '../err-massage/';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    itemList: null,
    err: false,
    loading: true
  }

  erroMassage = (err) => {
    this.setState({
      itemList: null,
      err: true,
      loading: false
    })
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
    .then((itemList)=>{
      this.setState({
        itemList,
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
            key={`${item.idKey}${item.name}`}
            className="list-group-item"
            onClick={()=>{onPersonClick(item.idKey)}}
          >
            {this.props.renderText(item)}
          </li>
        )
      })
    )
  }
  
  render() {
    const {itemList, loading, err} = this.state;
    const listItems = itemList ? this.list(itemList): null;
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