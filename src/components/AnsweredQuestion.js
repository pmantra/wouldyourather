import React, { Component } from 'react'
import { Segment, Label, Grid, Header, Image, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {
    render () {
        const { author, question, authedUserObj } = this.props
        const optionOne = question.optionOne.text
        const optionTwo = question.optionTwo.text
        const authedUserAnswer = authedUserObj.answers[question.id]
        
        return (
                <div>
                    <Segment compact>
                        <Label attached='top'>Asked by {author.name}:</Label>
                        <Grid columns='equal' divided>
                            <Grid.Column width={4}>
                                <Image size='medium' avatar circular src={author.avatarURL}/>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <List relaxed='very'>
                                    <Header>Results:</Header>
                                    <List.Item>
                                        <Segment padded='very'>
                                            {authedUserAnswer==='optionOne' &&
                                            <Label color='yellow' circular size='large' floating>Your Vote</Label>
                                            }
                                            <Header as='h5'
                                            color={authedUserAnswer==='optionOne'?'blue':'grey'}>
                                                {`Would you rather \n${optionOne}`}
                                            </Header>
                                        </Segment>
                                    </List.Item>
                                    <List.Item>
                                        <Segment padded='very'>
                                            {authedUserAnswer==='optionTwo' &&
                                            <Label color='yellow' circular size='large' floating>Your Vote</Label>
                                            }
                                            <Header as='h5'
                                            color={authedUserAnswer==='optionTwo'?'blue':'black'}>
                                                {`Would you rather \n${optionTwo}`}
                                            </Header>
                                        </Segment>
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
        authedUserObj: users[authedUser]
    }
}

export default connect(mapStateToProps)(AnsweredQuestion)