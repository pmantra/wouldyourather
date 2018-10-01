import React, { Component } from 'react'
import { Segment, Label, Grid, Header, Image, Progress } from 'semantic-ui-react'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {
    render () {
        const { author, question, authedUserObj } = this.props
        const optionOne = question.optionOne.text
        const optionTwo = question.optionTwo.text
        const answerOptionOne = question.optionOne.votes.find(userId => userId === authedUserObj.id)
        const answerOptionTwo = question.optionTwo.votes.find(userId => userId === authedUserObj.id)
        const authedUserAnswer = answerOptionOne
            ? 'optionOne'
            : answerOptionTwo ? 'optionTwo' : undefined
        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes

        return (
                <div className='answered-question'>
                    <Segment>
                        <Label attached='top'>Asked by {author.name}:</Label>
                        <Grid divided>
                            <Grid.Row>
                                <Grid.Column verticalAlign='middle' width={6}>
                                    <Image size='small' avatar circular src={authedUserObj.avatarURL}/>
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle' width={10}>
                                    <Header as='h2'>Results:</Header>
                                    <Segment padded textAlign='center'>
                                        {authedUserAnswer==='optionOne' &&
                                        <Label color='yellow' circular size='large' floating>Your Vote</Label>
                                        }
                                        <Header as='h5'
                                        color={authedUserAnswer==='optionOne'?'blue':'grey'}>
                                            {`Would you rather \n${optionOne}`}
                                        </Header>
                                        <Progress value={optionOneVotes} total={totalVotes}
                                        progress='percent'
                                        color={authedUserAnswer==='optionOne'?'blue':'grey'} precision={2}>
                                            {optionOneVotes} out of {totalVotes} votes
                                        </Progress>
                                    </Segment>
                                    <Segment padded textAlign='center'>
                                    {authedUserAnswer==='optionTwo' &&
                                        <Label color='yellow' circular size='large' floating>Your Vote</Label>
                                    }
                                        <Header as='h5'
                                        color={authedUserAnswer==='optionTwo'?'blue':'black'}>
                                            {`Would you rather \n${optionTwo}`}
                                        </Header>
                                        <Progress value={optionTwoVotes} total={totalVotes}
                                        progress='percent'
                                        color={authedUserAnswer==='optionTwo'?'blue':'grey'} precision={2}>
                                            {optionTwoVotes} out of {totalVotes} votes
                                        </Progress>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
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
        authedUserObj: users[authedUser]
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)