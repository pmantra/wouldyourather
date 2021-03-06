import React from 'react'
import { Segment, Grid, Image, Header, List, Card, Label, Statistic } from 'semantic-ui-react'
import { getLeaderIcon } from '../utils/helpers'

const Leaderboard = (props) => {
    const { users } = props
    const sortedUsers = Object.values(users).sort((a,b) =>
            (b.questions.length + Object.values(b.answers).length)
            - (a.questions.length + Object.values(a.answers).length))
    return (
        <div className='leader-board'>
            {Object.values(sortedUsers).map((user,index) =>
                <Segment key={index} size='massive'>
                    <Label corner='left' icon={getLeaderIcon(index).icon} color={getLeaderIcon(index).color}/>
                    <Grid columns={3} divided>
                        <Grid.Row stretched>
                            <Grid.Column verticalAlign='middle'>
                                <Image size='small' avatar circular src={user.avatarURL}/>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle'>
                                <Header as='h2'>{user.name}</Header>
                                <List divided>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Header as='h4'>{user.questions.length}</Header>
                                        </List.Content>
                                        <List.Content><Header as='h4'>Asked</Header></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content floated='right'>
                                            <Header as='h4'>{Object.entries(user.answers).length}</Header>
                                        </List.Content>
                                        <List.Content><Header as='h4'>Answered</Header></List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column verticalAlign='middle'>
                                <Card>
                                    <Card.Content textAlign='center'>
                                        <Header as='h4'>Score</Header>
                                        <Card.Description>
                                            <Statistic color='blue'>
                                                <Statistic.Value>
                                                    {user.questions.length + Object.entries(user.answers).length}
                                                </Statistic.Value>
                                            </Statistic>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            )}
        </div>
    )
}

export default Leaderboard