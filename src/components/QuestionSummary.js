import React, { Component } from 'react'
import { Segment, Label, Image, Button, Grid, List, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class QuestionSummary extends Component {

    toQuestionPage = (e) => {
        e.preventDefault()
        const { authedUser, question } = this.props
        if(authedUser !== null) {
            this.props.history.push({
                pathname: `/questions/${question.id}`
            })
        }
    }

    render () {
        const { question, author } = this.props
        return (
            <div className='question-summary'>
                <Segment>
                    <Label attached='top'>{author.name} asks:</Label>
                    <Grid columns='equal' divided>
                        <Grid.Column width={4}>
                            <Image size='small' avatar circular src={author.avatarURL}/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <List relaxed='very'>
                                <Header>Would you rather?</Header>
                                <List.Item><span>...{question.optionOne.text.slice(0,20)}...</span></List.Item>
                                <List.Item>
                                    <Button fluid basic color='blue' onClick={(e)=> this.toQuestionPage(e)}>View Poll</Button>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = ({ users, authedUser }, { question }) => {
    return {
        author: users[question.author],
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionSummary))
