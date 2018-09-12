import React, { Component } from 'react'
import { Segment, Label, Image, Button, Grid, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

class QuestionSummary extends Component {
    render () {
        const { question, author } = this.props
        console.log('question', question)
        return (
            <Segment>
                <Label attached='top'>{author.name} asks:</Label>
                <Grid columns='equal' divided>
                    <Grid.Column width={4}>
                        <Image size='small' avatar circular src={author.avatarURL}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <List relaxed='very'>
                            <List.Item><strong>Would you rather? </strong></List.Item>
                            <List.Item><span>...{question.optionOne.text}...</span></List.Item>
                            <List.Item><span></span></List.Item>
                            <List.Item><Button fluid basic color='blue'>View Poll</Button></List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}

const mapStateToProps = ({ users }, { question }) => {
    return {
        author: users[question.author]
    }
}

export default connect(mapStateToProps)(QuestionSummary)