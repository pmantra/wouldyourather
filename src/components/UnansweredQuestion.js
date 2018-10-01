import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Image, Label, List, Header, Button, Radio } from 'semantic-ui-react'
import { handleSaveQuestionAnswer } from '../actions/shared'

class UnansweredQuestion extends Component {

    state = {
        answer: ''
    }

    handleChange = (e, { value }) => this.setState({ answer: value })

    handleSubmit = () => {
        const { answer } = this.state
        const { question, authedUser } = this.props
        const questionId = question.id
        this.props.onSubmit(authedUser, questionId, answer)
    }

    render () {
        const { question, author } = this.props
        const { answer } = this.state
        return (
            <div className = 'answered-question'>
                <Segment>
                    <Label attached='top'>{author.name} asks:</Label>
                    <Grid columns='equal' divided>
                        <Grid.Column width={4}>
                            <Image size='small' avatar circular src={author.avatarURL}/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <List relaxed='very'>
                                <Header>Would you rather?...</Header>
                                    <List.Item>
                                        <Radio
                                            label={question.optionOne.text}
                                            name='radioGroup'
                                            value='optionOne'
                                            checked={answer === 'optionOne'}
                                            onChange={this.handleChange}
                                        />
                                    </List.Item>
                                    <List.Item>
                                        <Radio
                                            label={question.optionTwo.text}
                                            name='radioGroup'
                                            value='optionTwo'
                                            checked={answer === 'optionTwo'}
                                            onChange={this.handleChange}
                                        />
                                    </List.Item>
                                <List.Item><span></span></List.Item>
                                <List.Item>
                                    <Button fluid basic color='blue' onClick={this.handleSubmit}>Submit Poll</Button>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
    const { id } = props.match.params
    return {
        question: questions[id],
        author: users[questions[id].author],
        authedUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (authedUser, questionId, answer) =>
        dispatch(handleSaveQuestionAnswer(authedUser, questionId, answer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UnansweredQuestion)