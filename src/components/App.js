import React, { Component, Fragment } from 'react'
import '../App.css'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import MenuBar from './MenuBar'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import NewQuestion from './NewQuestion'
import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'

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
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
              {this.props.loading === true
                ? null
                : <div>
                    <MenuBar />
                    <Route path='/' exact component={QuestionList} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                  </div>
              }
          </div>
        </Fragment>
      </Router>
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
