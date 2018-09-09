import React, { Component } from 'react'
import '../App.css'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default connect()(App)
