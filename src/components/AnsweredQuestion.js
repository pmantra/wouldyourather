import React from 'react'
import { Segment, Label, Grid, Header, Image, List } from 'semantic-ui-react'

const AnsweredQuestion = (props) => {
    const { author, question, loggedInUser } = props
    const name = author ? author.name : ''
    const imageURL = author ? author.avatarURL : ''
    const optionOne = question ? question.optionOne.text : ''
    const optionTwo = question ? question.optionTwo.text : ''
    const loggedInUserAnswer = loggedInUser && question ? loggedInUser.answers[question.id]: ''
    return (
        <div>
            <Segment compact>
                <Label attached='top'>Asked by {name}:</Label>
                <Grid columns='equal' divided>
                    <Grid.Column width={4}>
                        <Image size='small' avatar circular src={imageURL}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <List relaxed='very'>
                            <Header>Results:</Header>
                            <List.Item>
                                <Segment padded='very' color='teal' tertiary>
                                    {loggedInUserAnswer==='optionOne' &&
                                    <Label color='yellow' circular size='large' floating>Your Vote</Label>
                                    }
                                    <Header as='h5'
                                    color={loggedInUserAnswer==='optionOne'?'teal':'grey'}>
                                        {`Would you rather \n${optionOne}`}
                                    </Header>
                                </Segment>
                            </List.Item>
                            <List.Item>
                                <Segment padded='very'>
                                    {loggedInUserAnswer==='optionTwo' &&
                                    <Label color='yellow' circular size='large' floating>Your Vote</Label>
                                    }
                                    <Header as='h5'
                                    color={loggedInUserAnswer==='optionTwo'?'teal':'black'}>
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

export default AnsweredQuestion