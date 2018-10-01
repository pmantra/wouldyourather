import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button, Segment, Input } from 'semantic-ui-react'
import { saveNewUser } from '../actions/users'
import { formatNewUser } from '../utils/helpers'

class NewUser extends Component {

    state = {
        id: '',
        name: ''
    }

    handleChange = (e,{name,value}) => {
        this.setState(() => ({
            [name]: value
        }))
    }

    handleClick = () => {
        const { id, name } = this.state
        this.props.addNewUser(id,name)
    }

    render () {
        const { id, name } = this.state
        return (
            <div>
                <Header as='h3'>Add New User </Header>
                <Segment raised padded='very'>
                    <Grid columns='equal'>
                        <Grid.Row/>
                        <Grid.Row stretched>
                            <Grid.Column width={3} verticalAlign='middle'>
                                <Header as='h5'>UserId</Header>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Input placeholder='enter user id' name='id' value={id}
                                onChange={this.handleChange}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row stretched>
                            <Grid.Column width={3} verticalAlign='middle'>
                                <Header as='h5'>Name</Header>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Input placeholder='enter user name' name='name' value={name}
                                onChange={this.handleChange}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row/>
                        <Grid.Row stretched>
                            <Grid.Column width={3} />
                            <Grid.Column width={5} verticalAlign='middle'>
                                <Button color='blue' inverted
                                onClick={this.handleClick}>Login</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewUser: (id,name) => dispatch(saveNewUser(formatNewUser(id,name)))
    }
}

export default connect(undefined,mapDispatchToProps)(NewUser)
