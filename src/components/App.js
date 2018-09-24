import React, { Component } from 'react'
import '../App.css'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import NewQuestion from './NewQuestion'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { questions, users, authedUser } = this.props
    let question, author, loggedInUser
    if(questions && users && Object.values(questions).length>0) {
      question = Object.values(questions)[0]
      author = users[question.author]
      loggedInUser = users[authedUser]
    }

    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <NewQuestion />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    loading: authedUser === null,
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(App)
