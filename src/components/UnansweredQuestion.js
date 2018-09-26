import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Image, Label, List, Header, Button, Radio } from 'semantic-ui-react'

class UnansweredQuestion extends Component {

    state = {
        answer: ''
    }

    handleChange = (e, { value }) => this.setState({ answer: value })

    handleSubmit = () => {
        //todo dispatch
    }

    render () {
        const { loggedInUser, question, author } = this.props
        const { answer } = this.state
        return (
            <div>
                <Segment compact>
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
                                <List.Item><Button fluid basic color='blue'>View Poll</Button></List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions, loggedInUser }, props) => {
    const { id } = props.match.params
    return {
        question: questions[id],
        author: users[questions[id].author],
        loggedInUser
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    //todo
}

export default  connect(mapStateToProps)(UnansweredQuestion)