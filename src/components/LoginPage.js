import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { handleLogin } from '../actions/authedUser'
import { Header, Dropdown, Grid, Button, Segment} from 'semantic-ui-react'

class LoginPage extends Component {

    state = {
        userId: '',
        showAddUser: false
    }

    componentDidMount () {
        this.props.loadData()
    }

    handleChange = (e,data) => {
        this.setState(() => ({
            userId: data.value
        }))
    }

    handleClick = (e) => {
        e.preventDefault()
        const { userId } = this.state
        this.props.login(userId)
    }

    toggleNewUser = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            showAddUser: !prevState.showAddUser
        }))
    }

    render () {
        const { userOptions, loading } = this.props
        return (
            <Fragment>
                <LoadingBar />
                <div className = 'login'>
                {loading === true
                    ? null
                    :
                    <div>
                        <Header as='h3'>Welcome, Please login to continue! </Header>
                        <Segment raised padded='very'>
                            <Grid columns='equal'>
                                <Grid.Row/>
                                <Grid.Row stretched>
                                    <Grid.Column width={3} verticalAlign='middle'>
                                        <Header as='h5'>Login as</Header>
                                    </Grid.Column>
                                    <Grid.Column width={10}>
                                        <Dropdown selection options={userOptions} onChange={this.handleChange}/>
                                    </Grid.Column>
                                    <Grid.Column width={3} verticalAlign='middle'>
                                        <Button primary type='submit' onClick={this.handleClick}>Login</Button>
                                    </Grid.Column>
                                </Grid.Row>
                                {/*
                                <Grid.Row stretched>
                                    <Grid.Column width={9}></Grid.Column>
                                    <Grid.Column width={4}>
                                        <Label as='a' basic size='small' onClick={this.toggleNewUser}>
                                            <Icon name='plus circle' />
                                            add new user
                                        </Label>
                                    </Grid.Column>
                                    <Grid.Column width={3}></Grid.Column>
                                </Grid.Row>
                                */}
                            </Grid>
                        </Segment>
                        <br />
                        {/*showAddUser===true &&
                        <NewUser />
                        */}
                    </div>
                }
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ authedUser, users, loadingBar }) => {
    const userOptions = []
    Object.values(users).map(user =>
    userOptions.push({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL }
    }))
    return {
        authedUser,
        userOptions,
        loading: loadingBar ? loadingBar.default===1 : true
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        loadData: () => dispatch(handleInitialData()),
        login: (id) => dispatch(handleLogin(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)