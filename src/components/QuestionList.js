import React, { Component } from 'react'
import { Tab, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'
import { filterArrayWithAnotherArray } from '../utils/helpers'

class QuestionList extends Component {
    render () {
        const { unansweredQuestions, answeredQuestions } = this.props
        const panes = [
            { menuItem: 'Unanswered Questions',
                render: () =>
                <Tab.Pane attached='bottom'>
                    {unansweredQuestions.map(question => (
                        <QuestionSummary key={question.id} question={question}/>
                    ))}
                    {unansweredQuestions.length===0 &&
                        <Message
                        icon='info circle'
                        header='You dont have any unanswered questions'/>
                    }
                </Tab.Pane> },
            { menuItem: 'Answered Questions', render: () =>
                <Tab.Pane attached='bottom'>
                    {answeredQuestions.map(question => (
                        <QuestionSummary key={question.id} question={question}/>
                    ))}
                    {answeredQuestions.length===0 &&
                        <Message
                        icon='info circle'
                        content='You havent answered any questions'/>
                    }
                </Tab.Pane> },
        ]
        return (
            <div className='question-list'>
                <Tab
                menu={{ color: 'blue', attached: 'top', widths: '2', tabular: false }}
                panes={panes} />
            </div>
        )
    }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
    const loggedInUser = users[authedUser]
    const allQuestions = Object.values(questions)
    const answeredQuestions = filterArrayWithAnotherArray(allQuestions, Object.keys(loggedInUser.answers), 'id', true)
    const unansweredQuestions = filterArrayWithAnotherArray(allQuestions, Object.keys(loggedInUser.answers), 'id', false)

    return {
        answeredQuestions: answeredQuestions.sort((a,b) => b.timestamp - a.timestamp),
        unansweredQuestions: unansweredQuestions.sort((a,b) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps)(QuestionList)
