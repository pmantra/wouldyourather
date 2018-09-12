import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'

class QuestionList extends Component {
    render () {
        const { questions } = this.props
        const panes = [
            { menuItem: 'Unanswered Questions',
                render: () =>
                <Tab.Pane attached='bottom'>
                    {questions.map(question => (
                        <QuestionSummary key={question.id} question={question}/>
                    ))}
                </Tab.Pane> },
            { menuItem: 'Answered Questions', render: () =>
                <Tab.Pane attached='bottom'>
                    List of unanswered questions
                </Tab.Pane> },
        ]
        return (
            <div className='question-list'>
                <Tab menu={{ color: 'blue', attached: 'top', widths: '2', tabular: false }} panes={panes} />
            </div>
        )
    }
}

const mapStateToProps = ({ questions }) => {
    console.log('questions',questions)
    return {
        questions: Object.values(questions)
    }
}

export default connect(mapStateToProps)(QuestionList)
