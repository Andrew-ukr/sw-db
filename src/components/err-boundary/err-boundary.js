import React, { Component } from 'react'
import ErrMassage from '../err-massage';

export default class ErrBoundary extends Component {
  state= {
    errorMsg: false,
  }

  componentDidCatch(error, info) {
    this.setState({
      errorMsg: true
    })
  }

  render() {
    if (this.state.errorMsg) {
      return <ErrMassage />
    }

    return this.props.children
  }
}
