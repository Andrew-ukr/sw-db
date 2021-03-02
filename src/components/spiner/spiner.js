import React, { Component } from 'react'
import loadingIcon from './loading.gif'
import './spiner.css'

export default class Spiner extends Component {
  render() {
    return (
      <img className="landing-icon" src={loadingIcon} alt="Loading"/>
    )
  }
}
