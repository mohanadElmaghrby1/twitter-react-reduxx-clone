import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleinitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadinBar from 'react-redux-loading'
class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleinitialData())
  }

  render() {
    console.log('app rendring again:', this.props.loading)

    return (
      <div>
        <LoadinBar />
        {this.props.loading ? null :
          <Dashboard />
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)