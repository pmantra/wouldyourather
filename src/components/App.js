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
import { isQuestionAnsweredByAuthor, getUserAvatar } from '../utils/helpers'
import Page404 from './Page404'
import LoginPage from './LoginPage';

class App extends Component {

  render() {
    const { questions, authedUser, users } = this.props
    let loggedInUser, avatar
    if(users[authedUser]) {
      loggedInUser = users[authedUser].name
      avatar = getUserAvatar(authedUser)
    }

    if(authedUser === null) {
      return (
        <LoginPage />
      )
    }

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
              {this.props.loading === true
                ? null
                : <div className='container'>
                    <MenuBar loggedInUser={loggedInUser} avatar={avatar}/>
                    <Switch>
                      <Route path='/' exact component={QuestionList} />
                      <Route path='/add' component={NewQuestion} />
                      <Route path='/questions/:id'
                      render={
                        (props) =>
                          questions[props.match.params.id]
                          ?
                            isQuestionAnsweredByAuthor(questions[props.match.params.id], authedUser)
                            ? <AnsweredQuestion {...props} />
                            : <UnansweredQuestion {...props}/>
                          : <Page404 />
                          } />
                      <Route path='/leaderboard' render={() =>
                        <Leaderboard users={users} />
                      } />
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

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    loadData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
