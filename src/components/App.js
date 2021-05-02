import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleinitialData} from '../actions/shared'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleinitialData())
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)