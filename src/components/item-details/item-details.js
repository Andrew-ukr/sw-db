import React, { Component } from 'react';
import Spiner from '../spiner';
import ErrMassage from '../err-massage';

import './item-details.css';

export default class ItemDetails extends Component {
  state={
    details: null,
    err: false,
    loading: false,
  }

  updataDetails = (id) => {
    this.props.getData(id)
    .then((details) => {
      this.setState({
        details,
        err: false,
        loading: false,
      })
    }).catch(this.erroMassage)
  }

  erroMassage = (err) => {
    this.setState({
      err: true,
      loading: false,
    })
  }
  
  componentDidMount() {
    this.updataDetails(this.props.data)
    this.setState({
      details: true,
      err: false,
      loading: true,
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.updataDetails(this.props.data)
      this.setState({
        details: true,
        err: false,
        loading: true,
      })
    }
  }
  
  componentDidCatch(error, info) {
    this.erroMassage(error);
  }
  
  render() {
    const {details, loading, err} = this.state;

    if (!details) {
      return <span>Select a character for detailed viewing</span>
    }

    const loadingMsg = loading ? <Spiner />: null;
    const arrorMsg = err ? <ErrMassage />: null;
    const content = details && !loading && !err ? <DefaultContent details={details} />: null;
    
    return (
      <div className="person-details card">
        {loadingMsg}
        {arrorMsg}
        {content}
      </div>
    )
  }
}

/**
 * компонент (дефолтний контент)
 */
const DefaultContent = ({details}) => {
  const {imgPath, gender, birthYear, eyeColor } = details;

  return (
    <>
      <img 
        className="person-image"
        src={imgPath} alt="person"
      />

      <div className="card-body">
        <h4>{details.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  )
}
