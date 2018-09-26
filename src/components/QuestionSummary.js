import React, { Component } from 'react'
import { Segment, Label, Image, Button, Grid, List, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class QuestionSummary extends Component {
    render () {
        const { question, author } = this.props
        return (
            <div>
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
                                <List.Item><Button fluid basic color='blue'>View Poll</Button></List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = ({ users }, { question }) => {
    return {
        author: users[question.author]
    }
}

export default connect(mapStateToProps)(QuestionSummary)