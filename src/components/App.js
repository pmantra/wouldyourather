import React, { Component, Fragment } from 'react'
import '../App.css'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import MenuBar from './MenuBar'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import NewQuestion from './NewQuestion'
import QuestionList from './QuestionList'
import Leaderboard from './Leaderboard'
import { isQuestionAnsweredByAuthor } from '../utils/helpers'
import Page404 from './Page404'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { questions, authedUser } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
              {this.props.loading === true
                ? null
                : <div className='container'>
                    <MenuBar />
                    <Switch>
                      <Route path='/' exact component={QuestionList} />
                      <Route path='/add' component={NewQuestion} />
                      <Route path='/questions/:id'
                      render={
                        (props) =>
                          isQuestionAnsweredByAuthor(questions[props.match.params.id], authedUser)
                          ? <AnsweredQuestion {...props} />
                          : <UnansweredQuestion {...props}/>} />
                      <Route path='/leaderboard' component={Leaderboard} />
                      <Route component={Page404}/>
                    </Switch>

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
